import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 100%;
  height: 1.3rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  %:disable {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
