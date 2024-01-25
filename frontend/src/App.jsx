import HomePage from "./pages/HomePage.jsx";
import Inscription from "./pages/Inscription.jsx";
import Connexion from "./pages/Connexion.jsx";
import AlbumDetails from "./pages/AlbumDetails.jsx";
import Profil from "./pages/Profil.jsx";
import Intro from "./pages/Intro.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import userContext from "./context/userContext";
import { useState, useMemo } from "react";

export default function App() {
  const [userConnected, setUserConnected] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
      
    },
    {
      path: "/accueil",
      element: <HomePage />,
      
    },

    { path: "/signin", element: <Inscription /> },

    {
      path: "/login",
      element: <Connexion />,
    },

    {
      path: "/profil",
      element: <Profil />,
    },
    {
      path: "/albums/:id",
      element: <AlbumDetails />,
    },
  ]);

  return (
    <userContext.Provider
      value={useMemo(
        () => ({ userConnected, setUserConnected }),
        [userConnected, setUserConnected]
      )}
    >
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}
