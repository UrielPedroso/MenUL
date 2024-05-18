import { TitleText } from "../../components/Typography";
import { CommandGenContainer } from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CommandGenerator() {
  return (
    <CommandGenContainer>
      <div>
        <img src={menulLogoImg} />
        <TitleText size="l" color="subtitle">
          Digite o numero da mesa, para gerar a comanda
        </TitleText>

        <label htmlFor="command">
          <TitleText size="s" color="label">
            Digite o numero da mesa
          </TitleText>
        </label>
        <Input placeholder="0000" type="number" id="command" />

        <Button text="Gerar Comanda" />
      </div>
    </CommandGenContainer>
  );
}
