/* eslint-disable react-hooks/rules-of-hooks */
import { createContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

const userContext = createContext();
// const navigate = useNavigate();
// const location = useLocation();

// useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
//       .then(() => {
//         // Faites quelque chose avec la réponse si nécessaire
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la requête API :", error);
//       });
//   } else {
//     navigate("/login");
//   }
// }, [location.pathname]);

export default userContext;
