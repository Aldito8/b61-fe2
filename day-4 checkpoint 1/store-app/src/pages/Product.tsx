import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import ProductDetail from "../components/ProductDetail";
import type { ProductType } from "@/types/productTypes";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function Products({ cart, addToCart, removeFromCart }: any) {


    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await api.get("/products");
                setProducts(res.data);
            } catch (err) {
                console.error("Gagal fetch data products", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="pt-20 flex items-center flex-col">
            <h1 className="text-4xl font-bold mb-4">Products</h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                    <ul className="mb-4 gap-8 grid grid-cols-1 md:grid-cols-3">
                        {products.map((product) => (
                            <Card key={product.id} className="">
                                <CardHeader className="w-full h-50">
                                    <div className="flex justify-center">
                                        <img src={product.image} className="w-32 h-32 object-contain" />
                                    </div>
                                    {product.title}
                                </CardHeader>


                                <CardDescription className="text-left line-clamp-3 px-5">
                                    {product.description}
                                </CardDescription>

                                <CardContent className="mb-1 text-right">
                                    ${product.price.toLocaleString()}
                                </CardContent>

                                <CardFooter className="flex justify-end mt-0 pt-0">
                                    <ProductDetail
                                        id={product.id}
                                        title={product.title}
                                        description={product.description}
                                        image={product.image}
                                        price={product.price}
                                        onAddToCart={addToCart}
                                        onRemoveFromCart={removeFromCart}
                                        isInCart={!!cart.find((item: any) => item.id === product.id)}
                                    />
                                </CardFooter>
                            </Card>
                        ))}
                    </ul>
            )}
        </div>
    )
}
