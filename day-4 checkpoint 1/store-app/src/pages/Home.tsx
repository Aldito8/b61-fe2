import { Card, CardContent, CardHeader } from "@/components/ui/card";;

const posts = [
    { title: "React", excerpt: "pustaka JavaScript sumber terbuka yang digunakan untuk membangun antarmuka pengguna (UI) interaktif pada aplikasi web dan mobile" },
    { title: "Tailwind & ShadCN", excerpt: "Styling modern dengan utility-first CSS." },
];

export default function Home() {
    return (
        <div className="p-4 space-y-4 mt-20">
            <h1 className="text-2xl font-bold text-primary">Home</h1>
            <div className="mt-16 flex justify-center gap-8">{posts.map((post) => (
                <Card className="w-100">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </CardHeader>
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </CardContent>
                </Card>
            ))}</div>

        </div>
    )
}