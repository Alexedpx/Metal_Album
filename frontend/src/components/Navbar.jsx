/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";


export default function Navbar() {
  const { userConnected } = useContext(userContext);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profil");
  };
 
  return (
    <div className="container-navbar">
      <NavLink to="/">
        <img src="/images/Now Showing2.png" className="logo" alt="logo" />
      </NavLink>

      <div className="login-container">
        {userConnected ? (
          <>
            <div className="user-profile">
              <p>{userConnected.pseudo}</p>

              {userConnected.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${
                    userConnected.image
                  }`}
                  alt="avataruser"
                  role="presentation"
                  onClick={handleProfile}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to="/signin">
              <p>S'inscrire</p>
            </NavLink>
            <NavLink to="/login">
              <p>Se connecter</p>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
