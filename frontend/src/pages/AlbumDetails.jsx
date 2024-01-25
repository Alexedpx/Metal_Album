import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AlbumDetails() {
  const [albumDetails, setAlbumDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getAlbumDetails = async () => {
      try {
        const album = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/albums/${id}`
        );
        setAlbumDetails(album.data[0]);
      } catch (error) {
        console.error("Error fetching album details:", error);
      }
    };

    getAlbumDetails();
  }, [id]);

  const titreArray = albumDetails.titre_chanson
    ? albumDetails.titre_chanson.split(",")
    : [];

  return (
    <>
      <Navbar />
      <div className="display-info">
        {albumDetails && (
          <div className="info-container">
            <div className="image">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${albumDetails.image}`}
                alt="img-album"
              />
            </div>
            <div className="details">
              <h1>{albumDetails.nom_groupe}</h1>
              <h2>{albumDetails.nom_album}</h2>
              <div className="song-list">
                <ul>
                  {titreArray.map((titre_chanson, index) => (
                    <li key={index}>
                      {titre_chanson}
                      <svg viewBox="0 0 256 256">
                        <path
                          d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                          strokeWidth="15px"
                          stroke="#ff5353"
                          fill="none"
                        ></path>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
