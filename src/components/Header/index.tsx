import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { MapPin, ShoppingCart } from 'phosphor-react';


export function Header(){
    return(
        <HeaderContainer >
            <div className="container">
                <img src={menulLogoImg}/>
                
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} />
                        699
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}