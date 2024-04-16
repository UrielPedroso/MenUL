import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, HamburgerCartCardContainer, RemoveButton } from "./styles";

export function BurgerCartCard(){
    return(
        <HamburgerCartCardContainer>
            <div>
                <img src="https://cdn.discordapp.com/attachments/629438660567236636/1229603988501041223/img-hbgr.png?ex=663048f3&is=661dd3f3&hm=fea92f211b95f5bbc7b572852bec021a65f1ba4ac11da5b7f5b677a3b224839e&" />
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