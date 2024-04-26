import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  HamburgerCartCardContainer,
  RemoveButton,
} from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface BurgerCartCardProps {
  lanche: CartItem;
}

export function BurgerCartCard({ lanche }: BurgerCartCardProps) {
  const { changeCartQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartQuantity(lanche.id, "increase");
  }

  function handleDecrease() {
    changeCartQuantity(lanche.id, "decrease");
  }
  
  function handleRemove() {
    removeCartItem(lanche.id);
  }

  const itemsTotal = lanche.price * lanche.quantity;

  const formattedPrice = formatMoney(itemsTotal);

  return (
    <HamburgerCartCardContainer>
      <div>
        <img src={`/burgers/lanche1.png`} />
        <div>
          <RegularText color="subtitle">{lanche.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={lanche.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </HamburgerCartCardContainer>
  );
}
