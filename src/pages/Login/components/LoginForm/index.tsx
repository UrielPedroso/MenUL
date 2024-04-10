import { RegularText, TitleText } from "../../../../components/Typography";
import { LoginFormContainer } from "./styles";
import menulLogoImg  from "../../../../assets/ul.svg";
import { UserForm } from "./UserForm";
import { Button } from "../../../../components/Button";

export function LoginForm() {
  return (
    <LoginFormContainer>
      <img src={menulLogoImg} />
      <TitleText size="l" color="subtitle">
        Faça o login para gerar uma comanda
      </TitleText>

      <UserForm />
      <Button text="Logar"/>
      <TitleText size="s" color="subtitle">Não tem conta ? <a href="/cadastro">Cadastre-se</a></TitleText>
    </LoginFormContainer>
  );
}
