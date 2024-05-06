import { Users } from "phosphor-react";
import { Button } from "../../components/Button";
import { InfoWithIcon } from "../../components/InfoWithIcon/Index";
import { RegularText, TitleText } from "../../components/Typography";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { WaitContainer, WaitDetailsContainer } from "./styles";

export function Wait() {
  const { colors } = useTheme();

  return (
    <WaitContainer>
      <div>
        <InfoWithIcon
          icon={<Users size={24} weight="fill" />}
          iconBg={colors["brand-yellow"]}
          text={
            <TitleText>
              Aguarde um instante
            </TitleText>
          }
        />
      </div>

      <section>
        <WaitDetailsContainer>
          <RegularText>
            Caso tenha uma duvida ou queira mudar um pedido clique no botão
          </RegularText>
          <div>
        <NavLink to="/">
            <Button text="Voltar ao cardapio" />
        </NavLink>
          </div>
        </WaitDetailsContainer>
      </section>
    </WaitContainer>
  );
}
