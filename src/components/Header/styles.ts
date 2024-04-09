import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    background: ${({theme}) => theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img{
        padding-top: 1rem;
        width: 7rem;
        height: 7rem;
    }

    a {
        font-size: 1.2rem;
        font-weight: lighter;
    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps{
    variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.5rem;
    border-radius: 6px;
    border: none;
    position: relative;
    font-size: ${({theme}) => theme.colors["text-regular-s"]};

    ${({variant, theme}) => css`
        background: ${theme.colors[`brand-${variant}-light`]};
        color: ${theme.colors[`brand-${variant}-dark`]};
    `}
    
 `;

