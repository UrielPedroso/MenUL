import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const HamburgerCardContainer = styled.div`
  width: 99%;
  height: 105%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;

  img {
    width: 7rem;
    height: 7rem;
    margin-top: 0.5rem;
    margin-left: 15rem;
  }
  
`;

export const CardTitleAndImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

export const Tags = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;

  span {
    background: ${({ theme }) => theme.colors["brand-purple-light"]};
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700",
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  color: "label",
})`
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 4rem;
  margin-left: 3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-right: 5rem;
  }



  p {
    line-height: 0.75rem;
  }
`;

export const AddCartWrapper = styled.div`
    width: 3rem;
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;

    > button {
        width: 2.375rem;
        height: 2.375rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors["brand-purple-dark"]};
        color: ${({ theme }) => theme.colors["base-card"]};
        border-radius: 6px;
        margin-left: 0.3rem;
        transition: .4s;

        &:hover{
            background: ${({ theme }) => theme.colors["brand-purple"]};
            color: ${({ theme }) => theme.colors["base-card"]};
        }
`;
