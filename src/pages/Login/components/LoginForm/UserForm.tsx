import { Input } from "../../../../components/Input";
import { TitleText } from "../../../../components/Typography";
import { UserFormContainer } from "./styles";

export function UserForm() {
  return (
    <UserFormContainer>
      <form action="">
        <TitleText size="s" color="subtitle">
          Nome
        </TitleText>
        <Input
          placeholder="Digite seu nome completo"
          type="text"
          className="nome"
        />

        <TitleText size="s" color="subtitle">
          Senha
        </TitleText>
        <Input
          placeholder="Digite sua senha"
          type="password"
          className="senha"
        />
      </form>
    </UserFormContainer>
  );
}
