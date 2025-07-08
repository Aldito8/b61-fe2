import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { dummyProducts, fetchProduct, type Product } from "../api/product";

export function ProductApp() {
    const [productInput, setProductInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [productData, setProductData] = useState<Product[]>([])

    const debounceProduct = useDebounce(productInput, 1000)

    useEffect(() => {

        if (!debounceProduct.trim()) {
            setProductData(dummyProducts)
            return
        }

        setLoading(true)

        fetchProduct(debounceProduct.trim())
            .then((data) => {
                if (data.length > 0) {
                    setProductData(data);
                } else {
                    setProductData([]);
                    setError("Product not found");
                }
            })
            .catch(() => {
                setError("failed to fetch data")
                setProductData([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [debounceProduct])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductInput(e.target.value)
    }

    return (
        <>
            <h1>Product Search</h1>

            <input
                type="text"
                placeholder="search product"
                value={productInput}
                onChange={handleChange}
            />

            {loading && <p>Loading...</p>}

            {!loading && error && <p style={{ color: "red" }}>{error}</p>}

            {!loading &&
                productData.map((product, idx) => (
                    <div key={idx}>
                        <h2>{product.name}</h2>
                        <p>
                            <strong>Category:</strong> {product.category}
                        </p>
                        <p>{product.description}</p>
                        <p>
                            <strong>Price:</strong> Rp{product.price.toLocaleString()}
                        </p>
                    </div>
                ))}
        </>
    );
}
