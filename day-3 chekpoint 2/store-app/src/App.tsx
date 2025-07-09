import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Product";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}
