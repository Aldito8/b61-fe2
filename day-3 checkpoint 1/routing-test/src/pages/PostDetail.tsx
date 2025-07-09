import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { postId } = useParams();

    return (
        <div className="p-4 mt-10">
            <h1 className="text-2xl font-bold text-primary mb-10">Post Detail</h1>
            <Card className="w-100">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-primary">Post Detail {postId}</h1>
                </CardHeader>
                <CardContent className="p-4">
                    <p className="text-sm text-gray-600">Post id : {postId}</p>
                </CardContent>
            </Card>
        </div>
    );
}