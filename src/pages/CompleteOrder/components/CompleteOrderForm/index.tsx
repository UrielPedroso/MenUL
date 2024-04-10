import { MapPin } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";

export function CompleteOrderForm() {
    const{ colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle 
            title="Endereço"
            subtitle="Informe o endereço"
            icon={<MapPin color={colors["brand-yellow"]} size={22}/>}
        /> 
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
