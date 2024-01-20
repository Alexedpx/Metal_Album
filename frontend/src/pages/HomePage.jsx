import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
// import { FontAwesomeIcon } from "react-icons/fa";

export default function HomePage() {
  const [metalalbum, setMetalalbum] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const dataAlbums = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/albums`
        );
        setMetalalbum(dataAlbums.data);
        console.log(dataAlbums);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    getAlbums();
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === "filterName") {
      setFilterName(value);
    } else if (name === "genre") {
      setSelectedGenre(value);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="header-text">
        {/* <h1>Thunder Pulse</h1> */}

        <h2>Une envie de découvrir un artiste ?</h2>

        <div className="search">
          <input
            type="text"
            name="filterName"
            value={filterName}
            className="search__input"
            placeholder="rechercher un album"
            onChange={handleInput}
          />
          <div className="genre">
            <select
              name="genre"
              value={selectedGenre}
              onChange={handleInput}
              className="selectgenre"
            >
              <option value="">Tous les genres</option>
              <option value="heavymetal">Heavy Metal</option>
              <option value="metalcore">MetalCore</option>
              <option value="hardcore">Hardcore</option>
              <option value="hardrock">Hard Rock</option>
              <option value="metalprogressif">Metal Progressif</option>
              <option value="numetal">Nu Metal</option>
              <option value="stoner">Stoner</option>
            </select>
          </div>
        </div>
      </div>

      <div className="display-albums-container">
        {metalalbum
          .filter((albums) => {
            const nameFilter =
              filterName === "" ||
              (albums.nom_groupe?.toLowerCase() || "").includes(
                filterName.toLowerCase()
              );

            const genreFilter =
              selectedGenre === "" ||
              (albums.genre?.toLowerCase() || "") ===
                selectedGenre.toLowerCase();

            return nameFilter && genreFilter;
          })

          .map((item) => (
            <div key={item.id} className="album-container">
              <div className="img-album">
                <img src={`${import.meta.env.VITE_BACKEND_URL}${item.image}`} />

                <div className="text-overlay">
                  <h3>{item.nom_album}</h3>

                  <ul className="titre">
                    {item.titre_chanson.split(",").map((titre, index) => (
                      <li key={index}>
                        <p>{titre.trim()}</p>
                        {/* <FontAwesomeIcon style={{ color: "#852f29" }} /> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
