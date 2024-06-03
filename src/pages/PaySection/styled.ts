import styled from "styled-components";
import { SectionBaseStyle } from "../CompleteOrder/styles";

export const PaySectionContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 44px 6px 44px;
    padding: 2rem;
    margin-top: 10rem;

    > div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    width: 30rem;
    display: flex;
    
    margin-left: auto;
    margin-right: auto;
    
  }
`;

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        flex-direction: center;
        justify-content: space-between;
        gap: 2rem;
    }

`;