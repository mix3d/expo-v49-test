import React from 'react';
import { BuilderContentComponent } from '../../../components/builder/BuilderContentComponent';
import { useRouter } from 'next/router';

const Category = ({ params }: { params: { category: string } }) => {
    const category = params.category

    return (
        <div>
            <h2>Category: {category}</h2>
            <BuilderContentComponent/>
        </div>
    )
}

export default Category