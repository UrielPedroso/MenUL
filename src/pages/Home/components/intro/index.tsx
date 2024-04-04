import { 
    BenefitsContainer, 
    IntroContainer, 
    IntroContent, 
    IntroTitle 
} from "./styles";
import { InfoWithIcon } from "../../../../components/InfoWithIcon/Index";
import { RegularText } from "../../../../components/Typography";
import { Hamburger, Package, ShoppingCart, Timer,  } from "phosphor-react";
import { useTheme } from "styled-components";


export function Intro(){
    const { colors } = useTheme();

    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Faça a escolha ideal para seu dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com UL Delivery você recebe seu pedido sem dor de cabeça
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                    <InfoWithIcon
                        iconBg={colors["brand-yellow-dark"]}
                        icon={<ShoppingCart weight="fill"/>}
                        text="Compra simples"
                    />
                    <InfoWithIcon
                        iconBg={colors["base-text"]}
                        icon={<Package weight="fill"/>}
                        text="Pedido feito na hora."
                    />
                    <InfoWithIcon
                        iconBg={colors["brand-yellow"]}
                        icon={<Timer weight="fill"/>}
                        text="Entrega rápida"
                    />
                    <InfoWithIcon
                        iconBg={colors["brand-purple"]}
                        icon={<Hamburger weight="fill"/>}
                        text="O pedido chega fresquinho até você"
                    />
                    </BenefitsContainer>
                </div>
            </IntroContent>
        </IntroContainer>
    )
}