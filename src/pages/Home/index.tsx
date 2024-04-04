import { OurHamburgers } from "./components/OurHamburgers";
import { Intro } from "./components/intro";
import { HomeContainer } from "./styles";

export function HomePage(){
    return(
        <HomeContainer>
            <Intro />
            <OurHamburgers/>
        </HomeContainer>
    );
}