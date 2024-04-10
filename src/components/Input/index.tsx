import { InputHTMLAttributes } from "react";
import { IputStyledContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps){
    return(
        <IputStyledContainer { ...props } />
    )
}