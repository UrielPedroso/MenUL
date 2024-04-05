import { TitleText } from "../../../../components/Typography";
import { lanches } from "../../../../data/lanches";
import { HamburgerCard } from "../HamburgerCard";
import { HamburgerList, OurHamburgersContainer } from "./styles";

export function OurHamburgers() {
  return (
    <OurHamburgersContainer className="container">
      <TitleText size="l" color="subtitle">
        Nosso Cardapio
      </TitleText>

      <HamburgerList>
        {lanches.map(( lanches ) => (
            <HamburgerCard key={lanches.id} lanches={lanches}/>

        ))}
        
      </HamburgerList>
    </OurHamburgersContainer>
  );
}
