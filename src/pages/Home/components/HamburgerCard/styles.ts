import styled from "styled-components";

export const HamburgerCardContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img{
        width: 7rem;
        height: 7rem;
    }
`;

export const Tags = styled.div`
    width: 100%;
    dispplay: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    
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
