import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typography";
import { NewUserForm } from "./NewUserForm";
import { RegisterFormContainer } from "./styles";
import menulLogoImg from "../../../../assets/ul.svg";
import { NavLink } from "react-router-dom";

export function RegisterForm() {
  return (
    <RegisterFormContainer>
      <img src={menulLogoImg} />
      <TitleText size="l" color="subtitle">
        Faça o cadastro para gerar uma comanda
      </TitleText>

      <NewUserForm />
      <Button text="Cadastrar" />
      <TitleText size="s" color="subtitle">
        Já tem conta ?<NavLink to="/login">Login</NavLink>
      </TitleText>
    </RegisterFormContainer>
  );
}
