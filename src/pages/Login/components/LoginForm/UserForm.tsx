import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../../../components/Input";
import { TitleText } from "../../../../components/Typography";
import { UserFormContainer } from "./styles";
import axios from "axios";
import { Button } from "../../../../components/Button";
import { NavLink } from "react-router-dom";

export function UserForm() {
  const [inputs, setInputs] = useState({ nome: "", senha: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputs);

    if (!inputs.nome || !inputs.senha) {
      setError("Todos os campos devem ser preenchidos");
      setStatus("error");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/backEnd/login.php",
        inputs
      );
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.erro) {
          setError(responseData.erro);
          setStatus("error");
        } else {
          setStatus("success");
          setError(null);
          <NavLink to="/command"/>
        }
      } else {
        setStatus("error");
        setError("Erro ao Achar Usuario");
      }
    } catch (error: Error) {
      setStatus("error");
      setError("Erro ao enviar dados: " + error.message);
    }
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      {status === "success" }
      {error && <div>{error}</div>}

      <label htmlFor="name">
        <TitleText size="s" color="subtitle">
          Nome
        </TitleText>
      </label>
      <Input
        onChange={handleChange}
        placeholder="Digite seu nome completo"
        type="text"
        name="nome"
        id="name"
      />

      <label htmlFor="pass">
        <TitleText size="s" color="subtitle">
          Senha
        </TitleText>
      </label>
      <Input
        onChange={handleChange}
        placeholder="Digite sua senha"
        type="password"
        name="senha"
        id="pass"
      />

      <div>
        <Button text="Logar" type="submit" />
      </div>
    </UserFormContainer>
  );
}
