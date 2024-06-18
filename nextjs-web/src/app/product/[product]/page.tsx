import React from 'react';
import { BuilderContentComponent } from '../../../components/builder/BuilderContentComponent';
import { useRouter } from 'next/router';

const Product = ({ params }: { params: { product: string } }) => {
    const product = params.product

    return (
        <div>
            <h2>Product: {product}</h2>
            <BuilderContentComponent/>
        </div>
    )
}

export default Product