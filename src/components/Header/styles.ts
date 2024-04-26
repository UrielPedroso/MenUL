import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
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

  img {
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

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 4rem;
  border-radius: 6px;
  border: none;
  position: relative;
  font-size: ${({ theme }) => theme.colors["text-regular-s"]};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${theme.colors[`brand-${variant}-dark`]};
      color: white;
    }
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme.colors["brand-purple"]};
      }
    `}
`;
