import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header(){
    return(
    <div className="w-full top-0 translate-x-1/2 right-1/2 fixed flex gap-10 py-8 justify-center border-b bg-gray-100">
        <Button asChild variant="outline">
            <Link
                to="/"
                className="hover:bg-black hover:text-white hover:scale-105 transition-colors duration-700 px-4 py-2 rounded-md">Home</Link>
        </Button>
        <Button asChild variant="outline">
            <Link to="/cart" className="hover:bg-black hover:text-white hover:scale-105 transition-colors duration-700 px-4 py-2 rounded-md">Cart</Link>
        </Button>
        <Button asChild variant="outline">
            <Link to="/products" className="hover:bg-black hover:text-white hover:scale-105 transition-colors duration-700 px-4 py-2 rounded-md">Products</Link>
        </Button>
    </div>
    )
}