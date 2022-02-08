import styled from "styled-components";


export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    width: 150px;
`;

export const ProductName = styled.label`
    font-size: 13px;
    font-weight: 400;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    min-height: 40px;
    color: ${({ theme }) => theme.colors.four};
    text-align: center;
`;

export const ProductImage = styled.img`
    border: 0.5px solid ${({ theme }) => theme.colors.four};
    width: 140px;
    padding: 5px;
    height: 140px;
`;

export const PricesCamp = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

export const SpecialPrice = styled.label`
    font-size: 13px;
    text-decoration: line-through;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.four};
    margin: 0px;
    margin-right: 5px;
    
`;

export const Price = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.two};
`;

export const BuyButton = styled.div`
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 800;
    padding: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.one};
    background-color: ${({ theme }) => theme.colors.three};
    :hover{
        cursor: pointer;
        color: ${({ theme }) => theme.colors.five};
    }
`;