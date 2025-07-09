import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
    { id: "1", title: "Belajar React", excerpt: "Dasar-dasar React Router." },
    { id: "2", title: "Tailwind & ShadCN", excerpt: "Styling modern dengan utility-first CSS." },
];

export default function Home() {
    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-primary">Home - Blog</h1>

            {posts.map((post) => (
                <Card key={post.id}>
                    <CardContent className="p-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-sm text-gray-600">{post.excerpt}</p>
                        <Link to={`/posts/${post.id}`}>
                            <Button className="mt-2">Lihat Detail</Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}