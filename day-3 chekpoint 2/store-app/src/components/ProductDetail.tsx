import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

type ProductDetailProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    onAddToCart: (product: any) => void;
    onRemoveFromCart: (id: number) => void;
    isInCart: boolean;
};

export default function ProductDetail({
    id,
    title,
    description,
    price,
    onAddToCart,
    onRemoveFromCart,
    isInCart,
}: ProductDetailProps) {
    console.log(`[Render] ${title} - isInCart:`, isInCart)

    const handleClick = () => {
        const product = { id, title, description, price }
        if (isInCart) {
            onRemoveFromCart(id)
        } else {
            onAddToCart(product)
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View Product</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                        <br />
                        Rp. {price.toLocaleString()}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={handleClick}
                        className={`${isInCart
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {isInCart ? "Remove from Cart" : "Add to Cart"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
