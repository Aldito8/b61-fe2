import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Product";
import Header from "./components/Header";
import { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import Login from "./pages/Login";
import type { ProductType } from "./types/productTypes";

export default function App() {

  const [cart, setCart] = useState<any[]>([]);
  console.log(cart)

  const addToCart = (product: ProductType) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product])
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId))
    console.log(cart)
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route path="/cart" element={
            <PrivateRoute>
              <Cart
                cart={cart}
                removeFromCart={removeFromCart} />
            </PrivateRoute>
          }>
          </Route>

          <Route path="/products" element={
            <PrivateRoute>
              <Products
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart} />
            </PrivateRoute>
          }>
          </Route>

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}
