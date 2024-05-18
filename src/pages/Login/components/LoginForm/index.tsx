import { TitleText } from "../../../../components/Typography";
import { LoginFormContainer } from "./styles";
import menulLogoImg from "../../../../assets/ul.svg";
import { UserForm } from "./UserForm";
import { Button } from "../../../../components/Button";
import { NavLink } from "react-router-dom";

export function LoginForm() {
  return (
    <LoginFormContainer>
      <img src={menulLogoImg} />
      <TitleText size="l" color="subtitle">
        Faça o login para gerar uma comanda
      </TitleText>

      <UserForm />
      

      <TitleText size="s" color="subtitle">
        Não tem conta ?<NavLink to="/register">Cadastre-se</NavLink>
      </TitleText>
    </LoginFormContainer>
  );
}
