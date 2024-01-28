/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";

export default function Navbar() {
  const { userConnected, setUserConnected } = useContext(userContext);
  const navigate = useNavigate();

  const handlelogout = () => {
    setUserConnected(null);
  };

  const handleProfile = () => {
    navigate("/profil");
  };

  return (
    <div className="container-navbar">
      <div className="login-container">
        {userConnected.image && (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${userConnected.image}`}
            alt="avataruser"
            role="presentation"
            onClick={handleProfile}
          />
        )}
        <div className="user-profile">
          <p>{userConnected.pseudo}</p>
          <div className="logout-button">
            <button onClick={handlelogout} type="submit" className="logout">
              <NavLink to="/">Se déconnecter</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="navlink">
        <div className="accueil-container">
          <img src=" images/avatar.png" />
          <NavLink to="/accueil">
            <h1>ACCUEIL</h1>
          </NavLink>
        </div>

        <div className="accueil-container">
          <img src=" images/avatar.png" />
          <NavLink to="/profil">
            <h1>MON PROFIL</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
