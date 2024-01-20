import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import { TiEdit } from "react-icons/ti";

export default function Profil() {
  const { userConnected, setUserConnected } = useContext(userContext);
  const [deleteUser, setDeleteUser] = useState(userConnected);
  const [userUpdate, setUserUpdate] = useState(userConnected);
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
        deletedUser
      );
      setDeleteUser(deleteUser.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userUpdated = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userUpdate.id}`,
        userUpdate
      );

      setUserConnected(userUpdated.data);
      setIsEditing(false);
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

              <TiEdit size={30} onClick={handleEdit} />

              {!isEditing ? (
                <form id="form" className="pseudo-user" onSubmit={handleSubmit}>
                  <h1>{userConnected.pseudo}</h1>
                </form>
              ) : (
                <form id="form" className="edit-user" onSubmit={handleSubmit}>
                  <input
                    className="input-edit"
                    type="text"
                    value={userUpdate.pseudo}
                    onChange={(event) =>
                      setUserUpdate({
                        ...userUpdate,
                        pseudo: event.target.value,
                      })
                    }
                  />

                  <div className="edit-profil">
                    <button className="saveprofil" type="submit">
                      Enregistrer
                    </button>
                  </div>
                  <div className="delete-user-profile">
                    <button
                      className="delete"
                      type="submit"
                      onClick={() => handleDeleteProfil(deleteUser.id)}
                    >
                      <NavLink to="/">Supprimer le profil</NavLink>
                    </button>
                  </div>
                </form>
              )}

              {!isEditing && (
                <div className="preference-user">
                  <h2>Ton artiste préféré</h2>
                  <p>{userConnected.favorite_artiste}</p>
                  <h2>Ton album préféré</h2>
                  <p>{userConnected.favorite_album}</p>
                </div>
              )}
              {!isEditing && (
                <div className="logout-button">
                  <button
                    onClick={handlelogout}
                    type="submit"
                    className="logout"
                  >
                    <NavLink to="/">Se déconnecter</NavLink>
                  </button>
                </div>
              )}
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
