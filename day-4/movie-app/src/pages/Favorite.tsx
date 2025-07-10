import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { MovieType } from "@/types/movieType";

export default function Favorite({ favorite, removeFromFavorite }: any) {
    return (
        <div className="p-4 mt-20">
            <h1 className="text-2xl font-bold text-primary">Favorite</h1>

            {favorite.length === 0 ? (
                <p className="text-gray-600 mt-2">your favorite movies is here</p>
            ) : (
                <ul className="mt-4 space-y-3 grid grid-cols-3 space-x-10">
                        {favorite.map((movie: MovieType) => (
                            <Dialog key={movie.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-md transition">
                                        <CardHeader className="w-full">
                                            <div className="w-full h-72 overflow-hidden">
                                                <img
                                                    src={movie.image}
                                                    alt={movie.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <h2 className="text-center text-base font-bold text-2xl">{movie.name}</h2>
                                        </CardHeader>

                                        <CardDescription className="text-left line-clamp-3 px-5">
                                            {movie.summary}
                                        </CardDescription>

                                        <CardContent className="mb-1 text-right">
                                            <div className="flex gap-2 items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 text-yellow-500"
                                                >
                                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.84L19.336 24 12 20.203 4.664 24 6 15.263 0 9.423l8.332-1.268z" />
                                                </svg>

                                                <p>{movie.rating}</p>
                                            </div>
                                        </CardContent>

                                        <CardFooter className="flex justify-end mt-0 pt-0">
                                            <Button
                                                className="bg-red-600 hover:bg-red-700"
                                                onClick={() => removeFromFavorite(movie.id)}
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
                                                <img src={movie.image} className="w-100 h-100 object-contain" />
                                            </div>
                                            {movie.name}
                                        </DialogTitle>
                                        <DialogDescription>
                                            <div>
                                                {movie.summary}
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 text-yellow-500"
                                                >
                                                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.84L19.336 24 12 20.203 4.664 24 6 15.263 0 9.423l8.332-1.268z" />
                                                </svg>

                                                <p>{movie.rating}</p>
                                            </div>
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
