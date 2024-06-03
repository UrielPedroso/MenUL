import { Clock, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon/Index";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { NavLink } from "react-router-dom";

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer>
      <div>
        <TitleText size="l">Uhul! Pedido Confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o pedido chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Pedido Realizado para <strong>comanda 42</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <NavLink to="/">
            <Button text="Voltar ao cardapio" />
          </NavLink>
        </OrderDetailsContainer>
      </section>
    </OrderConfirmedContainer>
  );
}
