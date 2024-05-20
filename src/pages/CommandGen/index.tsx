import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TitleText } from "../../components/Typography";
import { CommandGenContainer } from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CommandGenerator() {
  const [tableNumber, setTableNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableNumber(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!tableNumber) {
      setError("O número da mesa deve ser preenchido");
      return;
    }

    try {
      const ID_Cliente = localStorage.getItem('ID_Cliente');
      const response = await axios.post("http://localhost/backend/generateCommand.php", { tableNumber, ID_Cliente });

      if (response.data.success) {
        navigate("/");
      } else {
        setError(response.data.erro);
      }
    } catch (error: any) {
      setError("Erro ao gerar comanda: " + error.message);
    }
  };

  return (
    <CommandGenContainer>
      <div>
        <img src={menulLogoImg} alt="Menu Logo" />
        <TitleText size="l" color="subtitle">
          Digite o número da mesa para gerar a comanda
        </TitleText>

        {error && <div>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="command">
            <TitleText size="s" color="label">
              Digite o número da mesa
            </TitleText>
          </label>
          <Input
            placeholder="0000"
            type="number"
            id="command"
            name="tableNumber"
            value={tableNumber}
            onChange={handleChange}
          />

          <Button text="Gerar Comanda" type="submit" />
        </form>
      </div>
    </CommandGenContainer>
  );
}
