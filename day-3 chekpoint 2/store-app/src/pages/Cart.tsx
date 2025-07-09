import { Button } from "@/components/ui/button";

export default function Cart({ cart, removeFromCart }: any) {
    return (
        <div className="p-4 mt-20">
            <h1 className="text-2xl font-bold text-primary">Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-600 mt-2">Keranjang kosong 🧺</p>
            ) : (
                <ul className="mt-4 space-y-3">
                    {cart.map((item: any) => (
                        <li key={item.id} className="flex justify-between items-center border p-3 rounded">
                            <div>
                                <h2 className="font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-500">{item.description}</p>
                                <p className="text-sm">Rp {item.price.toLocaleString()}</p>
                            </div>
                            <Button
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
