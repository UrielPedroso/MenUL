import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart();
  
  const formattedCartTotal = formatMoney(cartItemsTotal);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <div>
        <NavLink to="/orderCompleted">
          <Button text="Confirmar Pedido"  disabled={cartItemsTotal < 1} />
        </NavLink>

          <NavLink to="/">
            <Button text="Continuar Comprando"/>
          </NavLink>
      </div>
    </ConfirmationSectionContainer>
  );
}
