import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ProductType } from "@/types/productTypes";

export default function Cart({ cart, removeFromCart }: any) {
    return (
        <div className="p-4 mt-20">
            <h1 className="text-2xl font-bold text-primary">Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-600 mt-2">Keranjang kosong</p>
            ) : (
                <ul className="mt-4 space-y-3 grid grid-cols-3 space-x-10">
                        {cart.map((product: ProductType) => (
                            <Dialog key={product.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-md transition">
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
                                            <Button
                                                className="bg-red-600 hover:bg-red-700"
                                                onClick={() => removeFromCart(product.id)}
                                            >
                                                Remove
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            <div className="flex justify-center m-8">
                                                <img src={product.image} className="w-100 h-100 object-contain" />
                                            </div>
                                            {product.title}
                                        </DialogTitle>
                                        <DialogDescription>
                                            {product.description}
                                            <br />
                                            ${product.price}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            
                        ))}
                </ul>
            )}
        </div>
    )
}
