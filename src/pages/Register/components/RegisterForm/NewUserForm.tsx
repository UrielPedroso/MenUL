import { Input } from "../../../../components/Input";
import { TitleText } from "../../../../components/Typography";
import { UserFormContainer } from "./styles";

export function NewUserForm(){
    return(
        <UserFormContainer>
            <TitleText size="s" color="subtitle" >Número de telefone</TitleText>
            <Input placeholder="(00)0000-0000" type="number" className="telefone"/>

            <TitleText size="s" color="subtitle" >Nome</TitleText>
            <Input placeholder="Digite seu nome completo" type="text" className="nome" />
            
            <TitleText size="s" color="subtitle" >Senha</TitleText>
            <Input placeholder="Digite sua senha" type="password" className="senha" />

        </UserFormContainer>
    )
}