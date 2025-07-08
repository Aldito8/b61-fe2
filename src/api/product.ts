export type Product = {
    name: string
    description: string
    category: string
    price: number
};

export const dummyProducts: Product[] = [
    {
        name: "MacBook Pro",
        description: "Laptop dari Apple dengan performa tinggi.",
        category: "Electronics",
        price: 25000000,
    },
    {
        name: "Samsung Galaxy S23",
        description: "Smartphone flagship dari Samsung.",
        category: "Smartphone",
        price: 15000000,
    },
    {
        name: "Gaming Chair",
        description: "Kursi nyaman untuk gamer sejati.",
        category: "Furniture",
        price: 3000000,
    },
    {
        name: "Rolex Watch",
        description: "Jam tangan mewah dengan presisi tinggi.",
        category: "Accessories",
        price: 70000000,
    },
    {
        name: "Leather Backpack",
        description: "Tas punggung kulit elegan untuk kegiatan sehari-hari.",
        category: "Accessories",
        price: 1250000,
    },
    {
        name: "Scented Perfume",
        description: "Parfum dengan aroma elegan dan tahan lama.",
        category: "Beauty",
        price: 400000,
    },
    {
        name: "LED Monitor 27\"",
        description: "Monitor 27 inci dengan resolusi Full HD.",
        category: "Electronics",
        price: 2200000,
    },
    {
        name: "Gaming Mouse",
        description: "Mouse nirkabel dengan teknologi sensor optik.",
        category: "Electronics",
        price: 150000,
    },
    {
        name: "Running Shoes",
        description: "Sepatu lari ringan dan nyaman.",
        category: "Fashion",
        price: 850000,
    },
    {
        name: "Noise Cancelling Headphones",
        description: "Headphone dengan peredam suara untuk fokus maksimal.",
        category: "Electronics",
        price: 1750000,
    },
]

export async function fetchProduct(name: string): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = dummyProducts.filter((p) =>
                p.name.toLowerCase().includes(name.toLowerCase())
            )
            resolve(product)
        }, 1000)
    })
}
