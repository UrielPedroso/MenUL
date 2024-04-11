import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 65%;
  text-align: center;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    align-items: start;
  }
  

  button{
    width: 15rem;
    height: 4.5rem;
    font-size: 1.5rem;
    align-items: start;
    border-radius: 50px;
    margin-top: 3rem;    
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors["brand-yellow"]};
  }

  input{
    font-size: 1.2rem;
  }

`;

export const UserFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  grid-auto-flow: dense;

`;

