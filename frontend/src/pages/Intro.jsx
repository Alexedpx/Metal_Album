import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div className="background2">
      <div className="header">
        <h1>
          Thunder <span style={{ color: "#955DDC" }}>Pulse</span>
        </h1>
      </div>
      <div className="catching-title">
        <h2>
          <span style={{ color: "#955DDC" }}>Heavy</span> music,<br></br>
          <span style={{ color: "#955DDC" }}>Heavy</span> mood.
        </h2>
      </div>

      <div className="presentation-text">
        <h3>
          Ecoutez l’artiste de votre choix et créez votre propre playlist !
        </h3>
      </div>

      <div className="btn-setSignin">
        <button type="button" className="btn-intro">
          <NavLink to="/signin">Découvrir</NavLink>
        </button>
      </div>
    </div>
  );
}
