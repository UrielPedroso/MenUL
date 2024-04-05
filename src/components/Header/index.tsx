import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import menulLogoImg from "../../assets/ul.svg";
import { ShoppingCart, User } from 'phosphor-react';


export function Header(){
    return(
        <HeaderContainer >
            <div className="container">
                <img src={menulLogoImg}/>
                
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <User size={20} />
                        <a href="">Login</a>
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={25} />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}