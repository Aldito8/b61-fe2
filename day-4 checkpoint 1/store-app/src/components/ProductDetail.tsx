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
    id: number
    title: string
    description: string
    price: number
    image: string
    onAddToCart: (product: any) => void
    onRemoveFromCart: (id: number) => void
    isInCart: boolean
}

export default function ProductDetail({
    id,
    title,
    description,
    price,
    image,
    onAddToCart,
    onRemoveFromCart,
    isInCart,
}: ProductDetailProps) {

    const handleClick = () => {
        const product = { id, title, description, price, image }
        if (isInCart) {
            onRemoveFromCart(id)
        } else {
            onAddToCart(product)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View Product</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex justify-center m-8">
                            <img src={image} className="w-100 h-100 object-contain" />
                        </div> 
                        {title}
                        </DialogTitle>
                    <DialogDescription>
                        {description}
                        <br />
                        ${price.toLocaleString()}
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
