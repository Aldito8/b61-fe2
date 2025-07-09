import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import ProductDetail from "../components/ProductDetail";
import { products } from "@/data/productData";

export default function Products({ cart, addToCart, removeFromCart }: any) {
    return (
        <div className="pt-20 flex items-center flex-col">
            <h1 className="text-4xl font-bold mb-4">Products</h1>
            <ul className="mb-4 flex gap-8">
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardHeader>{product.title}</CardHeader>

                        <CardDescription className="text-left line-clamp-3 px-5">
                            {product.description}
                        </CardDescription>

                        <CardContent className="mb-1 text-right">
                            Rp. {product.price.toLocaleString()}
                        </CardContent>

                        <CardFooter className="flex justify-end mt-0 pt-0">
                            <ProductDetail
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                onAddToCart={addToCart}
                                onRemoveFromCart={removeFromCart}
                                isInCart={!!cart.find((item: any) => item.id === product.id)}
                            />
                        </CardFooter>
                    </Card>
                ))}
            </ul>
        </div>
    )
}
