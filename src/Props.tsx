export interface Product {
    id: number,
    name: string,
    detail: string,
    brand: string,
    price: number,
}

export interface Item {
    id: number,
    name: string,
    amount: number,
    price: number,
}

export interface ProductProps {
    products: Product[],
    items: Item[],
}

export interface ItemProps {
    items: Item[],
}