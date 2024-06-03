import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { Bell, ShoppingCart, User } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";

export function Header() {
  const { cartQuantity } = useCart();
  const numero_comanda = localStorage.getItem('numero_comanda');

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
              {numero_comanda ? `Comanda: ${numero_comanda}` : 'Login'} {/* Exibe a comanda se estiver disponível */}
            </HeaderButton>
          </NavLink>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={25} weight="fill" />
            </HeaderButton>
          </NavLink>

          <NavLink to="/callAttendant">
            <HeaderButton variant="yellow">
              <Bell size={25} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}