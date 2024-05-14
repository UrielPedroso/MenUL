import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../../../components/Input";
import { TitleText } from "../../../../components/Typography";
import { UserFormContainer } from "./styles";
import { Button } from "../../../../components/Button";
import axios from "axios";

export function NewUserForm() {
  const [inputs, setInputs] = useState({ telefone: '', nome: '', senha: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputs.telefone || !inputs.nome || !inputs.senha) {
      setError('Todos os campos devem ser preenchidos');
      setStatus('error');
      return;
    }

    try {
      const response = await axios.post('http://localhost/backEnd/cadastrar.php', inputs);
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.erro) {
          setError(responseData.erro);
          setStatus('error');
        } else {
          setStatus('success');
          setError(null);
          setInputs({ telefone: '', nome: '', senha: '' });
        }
      } else {
        setStatus('error');
        setError('Erro ao cadastrar usuário');
      }
    } catch (error) {
      setStatus('error');
      setError('Erro ao enviar dados: ' + error.message);
    }
  };

  return (
    <UserFormContainer onSubmit={handleSubmit}>
      {status === 'success' && <div>Cadastro realizado com sucesso!</div>}
      {error && <div>{error}</div>}

      <TitleText size="s" color="subtitle">
        Número de telefone
      </TitleText>
      <Input
        onChange={handleChange}
        placeholder="(00)0000-0000"
        type="text"
        name="telefone"
        value={inputs.telefone}
      />

      <TitleText size="s" color="subtitle">
        Nome
      </TitleText>
      <Input
        onChange={handleChange}
        placeholder="Digite seu nome completo"
        type="text"
        name="nome"
        value={inputs.nome}
      />

      <TitleText size="s" color="subtitle">
        Senha
      </TitleText>
      <Input
        onChange={handleChange}
        placeholder="Digite sua senha"
        type="password"
        name="senha"
        value={inputs.senha}
      />

      <Button text="Cadastrar" />
    </UserFormContainer>
  );
}
