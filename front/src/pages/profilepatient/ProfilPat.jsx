import Navbar from "../../components/Navbar";
import Fotter from "../../components/Fotter";
import "./ProfilPa.css";
import NavbarConnexion from "../../components/Navconnexion/NavbarConnexion";

const ProfilPat = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <NavbarConnexion/>
      <div className="parprofi">
      <div className="contner-all">
        <h2>Mon compte</h2>
        <div>
          <h3>Identité</h3>
          <p>Mon profil</p>
        </div>
        <hr />
        <div>
          <h3>Connexion</h3>
          <p>Téléphone</p>
          <hr />
          <p>E-mail</p>
          <hr />
         
        </div>
        </div>
      </div>
   
    </div>
  );
};

export default ProfilPat;
