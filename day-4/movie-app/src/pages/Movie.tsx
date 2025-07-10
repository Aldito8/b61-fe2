import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import MovieDetail from "../components/MovieDetail";
import type { MovieType } from "@/types/movieType";

export default function Movies({ favorite, addToFavorite, removeFromFavorite }: any) {


    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await api.get(`/shows`);

                const formattedMovies: MovieType[] = res.data.map((movie: any) => ({
                    id: movie.id,
                    name: movie.name,
                    summary: movie.summary,
                    rating: movie.rating.average,
                    image: movie.image.medium,
                }));

                setMovies(formattedMovies);
            } catch (err) {
                console.error("Gagal fetch data movies", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="pt-20 flex items-center flex-col">
            <h1 className="text-4xl font-bold mb-4">Movies</h1>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                    <ul className="mb-4 gap-8 grid grid-cols-1 md:grid-cols-3">
                        {movies.map((movie) => (
                            <Card key={movie.id} className="">
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
                                    <MovieDetail
                                        id={movie.id}
                                        name={movie.name}
                                        summary={movie.summary}
                                        image={movie.image}
                                        rating={movie.rating}
                                        onAddToFavorite={addToFavorite}
                                        onRemoveFromFavorite={removeFromFavorite}
                                        isFavorite={!!favorite.find((item: any) => item.id === movie.id)}
                                    />
                                </CardFooter>
                            </Card>
                        ))}
                    </ul>
            )}
        </div>
    )
}
