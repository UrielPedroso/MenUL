import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { ShoppingCart, User } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={menulLogoImg} />
        </NavLink>

        <HeaderButtonsContainer>
          <NavLink to="/login">
            <HeaderButton variant="purple">
              <User size={20} />
              Login
            </HeaderButton>
          </NavLink>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={25} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
