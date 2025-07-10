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

type MovieDetailProps = {
    id: number
    name: string
    summary: string
    rating: number
    image: string
    onAddToFavorite: (movie: any) => void
    onRemoveFromFavorite: (id: number) => void
    isFavorite: boolean
}

export default function MovieDetail({
    id,
    name,
    summary,
    rating,
    image,
    onAddToFavorite,
    onRemoveFromFavorite,
    isFavorite,
}: MovieDetailProps) {

    const handleClick = () => {
        const movie = { id, name, summary, rating, image }
        if (isFavorite) {
            onRemoveFromFavorite(id)
        } else {
            onAddToFavorite(movie)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View Detail</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex justify-center m-8">
                            <img src={image} className="w-100 h-100 object-contain" />
                        </div> 
                        {name}
                        </DialogTitle>
                    <DialogDescription>
                        {summary}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={handleClick}
                        className={`${isFavorite
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
