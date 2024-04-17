import { TitleText } from "../../../../components/Typography";
import { BurgerCartCard } from "../BurgersCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedBurgersContainer } from "./styles";

export function SelectedBurgers(){
    return(
        <SelectedBurgersContainer>
            <TitleText size="xs" color="subtitle">
                Pedidos da Comanda
            </TitleText>

            <DetailsContainer>
                <BurgerCartCard />
                <BurgerCartCard />
                <BurgerCartCard />

                <ConfirmationSection />
            </DetailsContainer>
        </SelectedBurgersContainer>
    )
}