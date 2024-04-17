import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, HamburgerCartCardContainer, RemoveButton } from "./styles";

export function BurgerCartCard(){
    return(
        <HamburgerCartCardContainer>
            <div>
                <img src={`/burgers/lanche1.png`} />
                <div>
                    <RegularText color="subtitle">Hamburger negas</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                           <Trash size={16} />
                           REMOVER  
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ 9,39</p>
        </HamburgerCartCardContainer>
    )
}