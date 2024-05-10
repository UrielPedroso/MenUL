import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  margin: 1rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  align-items: center;

  > button {
    border-radius: 20px;
    width: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
