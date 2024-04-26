import { ReactNode, createContext, useEffect, useState } from "react";
import { Lanches } from "../pages/Home/components/HamburgerCard";
import { produce } from "immer";

export interface CartItem extends Lanches {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addItemToCart: (cartItem: CartItem) => void;
  changeCartQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
}

const CART_ITEMS_STORAGE_KEY = "itemsDelivery:cartItems";

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY);
    if(storedCartItems){
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addItemToCart(lanche: CartItem) {
    const ItemAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === lanche.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (ItemAlreadyExistsInCart < 0) {
        draft.push(lanche);
      } else {
        draft[ItemAlreadyExistsInCart].quantity += lanche.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (itemExistsInCart >= 0) {
        const item = draft[itemExistsInCart];
        draft[itemExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (itemExistsInCart >= 0) {
        draft.splice(itemExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addItemToCart,
        changeCartQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
