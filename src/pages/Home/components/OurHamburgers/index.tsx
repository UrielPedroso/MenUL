import { TitleText } from "../../../../components/Typography";
import { HamburgerCard } from "../HamburgerCard";
import { HamburgerList, OurHamburgersContainer } from "./styles";

export function OurHamburgers(){
    return (
        <OurHamburgersContainer className="container">
            <TitleText size="l" color="subtitle">
                Nosso Cardapio
            </TitleText>

            <HamburgerList>
                <HamburgerCard />
                <HamburgerCard />
                <HamburgerCard />
                <HamburgerCard />

            </HamburgerList>
        </OurHamburgersContainer>
    )
} 