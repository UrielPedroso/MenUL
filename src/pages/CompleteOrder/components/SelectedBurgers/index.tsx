import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { BurgerCartCard } from "../BurgersCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedBurgersContainer } from "./styles";

export function SelectedBurgers(){
    const { cartItems } = useCart();

    return(
        <SelectedBurgersContainer>
            <TitleText size="xs" color="subtitle">
                Pedidos da Comanda
            </TitleText>

            <DetailsContainer>
                {cartItems.map(item => ( 
                    <BurgerCartCard key={item.id} lanche={item} />
                ))}

                <ConfirmationSection />
            </DetailsContainer>
        </SelectedBurgersContainer>
    )
}