import { createContext, useState, useContext, useEffect, } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    // Remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };

    // Check if a movie is already a favorite
    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite, };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
