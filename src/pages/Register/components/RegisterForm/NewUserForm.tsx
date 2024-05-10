import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../../../components/Input";
import { TitleText } from "../../../../components/Typography";
import { UserFormContainer } from "./styles";
import { Button } from "../../../../components/Button";
import axios from "axios";

export function NewUserForm() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post('http://localhost:', inputs)

    console.log(inputs);
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
        <TitleText size="s" color="subtitle">
          Número de telefone
        </TitleText>
        <Input
          onChange={handleChange}
          placeholder="(00)0000-0000"
          type="number"
          name="telefone"
        />

        <TitleText size="s" color="subtitle">
          Nome
        </TitleText>
        <Input
          onChange={handleChange}
          placeholder="Digite seu nome completo"
          type="text"
          name="nome"
        />

        <TitleText size="s" color="subtitle">
          Senha
        </TitleText>
        <Input
          onChange={handleChange}
          placeholder="Digite sua senha"
          type="password"
          name="senha"
        />

        <Button text="Cadastrar" />
    </UserFormContainer>
  );
}
