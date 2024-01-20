import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

export default function Connexion() {
  const navigate = useNavigate();
  const [inputPseudo, setInputPseudo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { setUserConnected } = useContext(userContext);

  const toggleMotDePasseVisibility = () => {
    setMotDePasseVisible(!motDePasseVisible);
  };

  const [motDePasseVisible, setMotDePasseVisible] = useState(false);
  const handleInputClick = (e) => {
    e.stopPropagation();
  };
  const handleConnexion = async (e) => {
    e.preventDefault();
    const userLogin = {
      pseudo: inputPseudo,
      password: inputPassword,
    };
    try {
      const dataUser = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login/`,
        userLogin
      );

      setUserConnected(dataUser.data);
      navigate("/profil");
    } catch (error) {
      alert("identifiants incorrect, veuillez réessayer");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-login">
        <div className="login-wrapper">
          <h1>Connectez-vous</h1>
          <p>
            Vous n'avez pas encore de compte sur ThunderPulse ? <br></br>
            <NavLink to="/signin">Inscription</NavLink>
          </p>
          <form onSubmit={handleConnexion} className="form-login">
            <p>Pseudo</p>
            <input
              type="text"
              className="name"
              onClick={handleInputClick}
              onChange={(event) => setInputPseudo(event.target.value)}
            />
            <div className="mdp-container">
              <p>Mot de passe</p>
              <input
                type={motDePasseVisible ? "text" : "password"}
                className="password"
                onClick={handleInputClick}
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
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
