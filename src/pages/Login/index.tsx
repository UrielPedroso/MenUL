import { LoginForm } from "./components/LoginForm";
import { LoginContainer } from "./styles";

export function LoginPage (){
    return(
        <LoginContainer className="container">
            <LoginForm />
        </LoginContainer>
    )
}