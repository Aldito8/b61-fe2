import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "../lib/ThemeToggle";

export default function Header(){
    const { token, logout } = useAuth()
    return(
        <div className="w-full top-0 translate-x-1/2 right-1/2 fixed flex gap-10 py-3 justify-center border-b bg-gray-100 dark:bg-black">
            <Button asChild variant="outline">
                <Link
                    to="/"
                    className="hover:bg-black hover:text-white hover:scale-105 dark:hover:bg-white dark:hover:text-black transition-colors duration-700 px-4 py-2 rounded-md">Home</Link>
            </Button>


            {token && (
                <Button asChild variant="outline">
                    <Link to="/cart" className="hover:bg-black hover:text-white hover:scale-105 dark:hover:bg-white dark:hover:text-black transition-colors duration-700 px-4 py-2 rounded-md">Cart</Link>
                </Button>)}

            {token && (

                <Button asChild variant="outline">
                    <Link
                        to="/products"
                        className="hover:bg-black hover:text-white hover:scale-105 dark:hover:bg-white dark:hover:text-black transition-colors duration-700 px-4 py-2 rounded-md"
                    >
                        Products
                    </Link>
                </Button>
            )}

            {token ? (
                <Button onClick={logout} variant="destructive">
                    Logout
                </Button>
            ) : (
                    <Button asChild variant="outline">
                        <Link to="/login">Login</Link>
                    </Button>
            )}

            <ThemeToggle />
        </div>
    )
}