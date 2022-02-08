import React from 'react';
import { Styles, ProductImage, SpecialPrice, Price, BuyButton, PricesCamp, ProductName } from './styles';
import { Assets } from '../../helpers/assets';

interface Props {
    index: number;
    name: string;
    specialPrice?: number;
    price: number;
    imagePath: string;
}

const ProductBlock : React.FC<Props> = ({index, name, specialPrice, price, imagePath}) => {
    return (
        <Styles>
            <ProductImage alt={`img-${index}`} src={Assets(`/assets/${imagePath}`)} />
            <ProductName>{name}</ProductName>
            <PricesCamp>
                {specialPrice !== undefined ? (<SpecialPrice>{`R$${specialPrice}`}</SpecialPrice>) : (null)}
                <Price>{`R$${price}`}</Price>
            </PricesCamp>
                
            <BuyButton>COMPRAR</BuyButton>
            


        </Styles>
    )
}

export default ProductBlock;