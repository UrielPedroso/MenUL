import { Question } from "phosphor-react";
import { Button } from "../../components/Button";
import { InfoWithIcon } from "../../components/InfoWithIcon/Index";
import { RegularText, TitleText } from "../../components/Typography";
import { CallAttendantContainer, CallOrderContainer } from "./styles";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function CallAttendant() {
  const { colors } = useTheme();

  return (
    <CallAttendantContainer>
      <div>
        <InfoWithIcon
          icon={<Question size={24} weight="fill" />}
          iconBg={colors["brand-yellow"]}
          text={<TitleText>Deseja chamar um atendente</TitleText>}
        />
      </div>

      <section>
        <CallOrderContainer>
          <RegularText>
            Caso tenha uma duvida ou queira mudar um pedido clique no botão
          </RegularText>
          <div>
            <NavLink to="/wait">
              <Button text="Chamar Atendente" />
            </NavLink>
            <NavLink to="/">
              <Button text="Voltar ao cardapio" />
            </NavLink>
          </div>
        </CallOrderContainer>
      </section>
    </CallAttendantContainer>
  );
}
