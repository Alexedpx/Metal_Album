import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

export default function Inscription() {
  const navigate = useNavigate();
  const [inputPseudo, setInputPseudo] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const toggleMotDePasseVisibility = () => {
    setMotDePasseVisible(!motDePasseVisible);
  };
  const [motDePasseVisible, setMotDePasseVisible] = useState(false);

  const handleInscription = async (e) => {
    e.preventDefault();
    const userSignin = {
      pseudo: inputPseudo,
      email: inputEmail,
      password: inputPassword,
      image: `/images/Avatar.png`,
    };
    try {
      const dataUser = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/signin/`,
        userSignin
      );

      if (dataUser.status === 201) {
        alert("inscription réussie!");
      }
    } catch (error) {
      console.error(error.message);
    }
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container-signin">
        <div className="signin-wrapper">
          <h1>Inscrivez-vous pour créer votre playlist !</h1>
          <p>
            Déjà inscrit sur ThunderPulse ? <br></br>
            <NavLink to="/login">Connexion</NavLink>
          </p>

          <form onSubmit={handleInscription} className="form-signin">
            <p>Adresse e-mail</p>
            <input
              type="email"
              className="email"
              onChange={(event) => setInputEmail(event.target.value)}
            />
            <p>Pseudo</p>
            <input
              type="text"
              className="name"
              onChange={(event) => setInputPseudo(event.target.value)}
            />
            <div className="mdp-container">
              <p>Mot de passe</p>
              <input
                type={motDePasseVisible ? "text" : "password"}
                className="password"
                onChange={(event) => setInputPassword(event.target.value)}
              />
              <img
                src={
                  motDePasseVisible
                    ? "/images/Mdp_unsee.png"
                    : "/images/Mdp_see.png"
                }
                alt="eye"
                className="mdp"
                onClick={toggleMotDePasseVisibility}
                role="presentation"
              />
            </div>
            <div className="container-button">
              <button type="submit" className="btn-inscription">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
