import React from 'react'
import { ProductProps } from './Props';

function Products({ products, items }: ProductProps) {
    const handleClick = (id: number, name: string, price: number) => {
        let i = items.find((item) => item.id === id);
        if (i === undefined) {
            items.push({ id: id, name: name, amount: 1, price: price });
        }
        else {
            i.amount++;
        }
        console.log(items);
    }

    return (
        <div className='mg-10'>
            <h2>Products</h2>
            <div>
                {products.map((product) => 
                    <div className='product'>
                        <img src={`../img/${product.id.toString()}.jpg`} alt="product" />
                        <div className='detail'>
                            <h3>{product.name}</h3>
                            <h3>{product.brand}</h3>
                            <p>{product.detail}</p>
                            <h3 style={{ color: "red", textAlign: "end"}}>{product.price}</h3>
                            <button onClick={() => handleClick(product.id, product.name, product.price)} className='button'>Add to cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;