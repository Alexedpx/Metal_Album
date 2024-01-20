import HomePage from "./pages/HomePage.jsx";
import Inscription from "./pages/Inscription.jsx";
import Connexion from "./pages/Connexion.jsx";
import Profil from "./pages/Profil.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import userContext from "./context/userContext";
import { useState, useMemo } from "react";

export default function App() {
  const [userConnected, setUserConnected] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
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
    }
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
