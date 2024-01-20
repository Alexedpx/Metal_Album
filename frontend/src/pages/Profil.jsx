import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import { TiEdit } from "react-icons/ti";

export default function Profil() {
  const { userConnected, setUserConnected } = useContext(userContext);
  const [deleteUser, setDeleteUser] = useState(userConnected);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handlelogout = () => {
    setUserConnected(null);
  };

  const handleDeleteProfil = async () => {
    try {
      const deletedUser = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${deleteUser.id}`,
        deleteUser
      );
      setDeleteUser(deletedUser.data);
      setUserConnected(null);
      // setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-playlist">
        <div className="profil-wrapper">
          {userConnected ? (
            <div className="user-profile">
              {userConnected.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${
                    userConnected.image
                  }`}
                  alt="avataruser"
                  role="presentation"
                />
              )}
              {!isEditing ? (
                <div className="pseudo-user">
                  <h1>{userConnected.pseudo}</h1>
                  <TiEdit size={30} onClick={handleEdit} />
                </div>
              ) : (
                <div className="edit-user">
                  <input className="input-edit" type="text" />
                  <div className="delete-user-profile">
                    <button
                      className="delete"
                      type="submit"
                      onClick={() => handleDeleteProfil(deleteUser.id)}
                    >
                      <NavLink to="/">Supprimer le profil</NavLink>
                    </button>
                  </div>
                </div>
              )}

              <div className="preference-user">
                <h2>Ton artiste préféré</h2>
                <p>{userConnected.favorite_artiste}</p>
                <h2>Ton album préféré</h2>
                <p>{userConnected.favorite_album}</p>
              </div>

              <div className="logout-button">
                <button onClick={handlelogout} type="submit" className="logout">
                  <NavLink to="/">Se déconnecter</NavLink>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="playlist-wrapper">
          <h1>Ma Playlist</h1>
        </div>
      </div>
    </>
  );
}
