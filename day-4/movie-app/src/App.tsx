import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import Login from "./pages/Login";
import type { MovieType } from "./types/movieType";
import Favorite from './pages/Favorite';
import Movies from "./pages/Movie";

export default function App() {

  const [favorite, setFavorite] = useState<any[]>([]);

  const addToFavorite = (movie: MovieType) => {
    if (!favorite.find((item) => item.id === movie.id)) {
      setFavorite([...favorite, movie])
    }
  }

  const removeFromFavorite = (movieId: string) => {
    setFavorite(favorite.filter((item) => item.id !== movieId))
    console.log(favorite)
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

          <Route path="/favorite" element={
            <PrivateRoute>
              <Favorite
                favorite={favorite}
                removeFromFavorite={removeFromFavorite} />
            </PrivateRoute>
          }>
          </Route>

          <Route path="/movies" element={
            <PrivateRoute>
              <Movies
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
                favorite={favorite} />
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
