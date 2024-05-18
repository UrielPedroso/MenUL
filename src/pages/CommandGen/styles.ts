import styled from "styled-components";

export const CommandGenContainer = styled.div`
width: 100%;

div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 30rem;
    display: flex;
    
    margin-left: auto;
    margin-right: auto;
    
    text-align: center;
    align-items: center;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 44px 6px 44px;
    margin-top: 9rem;
    padding: 2rem;
  }

  img {
    width: 10rem;
    height: 10rem;
    align-items: start;
    padding: 0;
  }

  label {
    position: relative;
    align-self: start;
    top: 1rem;
  }

  button {
    height: 4.5rem;
    font-size: 1.2rem;
    align-items: center;
    border-radius: 50px;
    margin-top: 3rem;
  }

  input {
    font-size: 1.2rem;
  }
`;
