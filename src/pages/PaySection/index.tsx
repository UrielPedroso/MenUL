import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";
import { useCart } from "../../hooks/useCart";
import { RegularText } from "../../components/Typography";
import { formatMoney } from "../../utils/formatMoney";
import { PaySectionContainer } from "./styled";


export function PaySection() {
  const { cartItemsTotal } = useCart();
  
  const formattedCartTotal = formatMoney(cartItemsTotal);

  return (
    <PaySectionContainer>
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
      </div>
      
    </PaySectionContainer>
  );
}
