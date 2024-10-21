// src/components/Products.js
import React from 'react';
import prd1 from '../assets/imgs/sanpham1.jpg';
import prd2 from '../assets/imgs/sanpham2.jpg';
import prd3 from '../assets/imgs/sanpham3.jpg';
import { useCart } from '../contexts/CartContext';

export default function Products() {
    const { addToCart } = useCart();

    const products = [{
        id: 1,
        prdName: 'Giày thời trang nữ AGCT074-2',
        price: 5490000,
        prdImage: prd1,
        description: 'Giày thời trang nữ AGCT074-2 trắng cho nữ của trung quốc .',
        },
        {
            id: 2,
            prdName: 'Giày Grand Sport 370031 Đen',
            price: 7049000,
            prdImage: prd2,
            description: 'Giày Giày Grand Sport 370031 đen giành cho nam của Trung Quốc.',
        },
        {
            id: 3,
            prdName: 'Giày Thể Thao Thông Dụng Nữ Bitis Basic BSW000600',
            price: 6813000,
            prdImage: prd3,
            description: 'Giày Thể Thao Thông Dụng Nữ Bitis Basic BSW000600 cho nữ của Trung Quốc.',
        },
    ];

    return ( <
        div className = 'container mx-auto p-6' >
        <
        h2 className = 'text-2xl font-bold' > Danh sách đồng hồ < /h2> <
        div className = 'grid grid-cols-3 gap-4' > {
            products.map((product) => ( <
                div key = { product.id }
                className = 'product-card' >
                <
                img src = { product.prdImage }
                alt = { product.prdName }
                className = 'product-image' / >
                <
                h3 className = 'product-name' > { product.prdName } < /h3> <
                p > { product.description } < /p> <
                p className = 'product-price' > { product.price }
                VND < /p> <
                button onClick = {
                    () => addToCart(product) }
                className = 'button-add-to-cart' >
                Thêm vào giỏ hàng <
                /button> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}