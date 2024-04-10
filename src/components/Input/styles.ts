import styled from "styled-components";

export const IputStyledContainer = styled.input`
    width: 100%;
    height: 4.9rem;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    transition: 0.4s;

    &:focus {
        border-color: ${({ theme }) => theme.colors["brand-yellow"]};
    }

    color: ${({ theme }) => theme.colors["base-text"]});
    font-size: 1rem;
    padding: 0 1.5rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors["brand-yellow"]};
    }

`;