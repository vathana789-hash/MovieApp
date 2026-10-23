
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/FavoriteContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
