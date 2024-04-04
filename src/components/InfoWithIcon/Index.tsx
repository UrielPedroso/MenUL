import { ReactNode } from "react";
import { IconsContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps{
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function InfoWithIcon({ icon,  text, iconBg }: InfoWithIconProps){
    return(
        <InfoWithIconContainer>
            <IconsContainer iconBg={iconBg}>{icon}</IconsContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}