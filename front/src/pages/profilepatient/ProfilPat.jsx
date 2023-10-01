
import { Link } from "react-router-dom";
import "./ProfilPa.css";

const ProfilPat = () => {
  return (
    // <div className="">
    //   {/* <Navbar /> */}
     
    //   <div className="parprofi">
    //   <div className="contner-all">
    //     <h2>Mon compte</h2>
    //     <div>
    //       <h3>Identité</h3>
    //       <p>Mon profil</p>
    //     </div>
    //     <hr />
    //     <div>
    //       <h3>Connexion</h3>
    //       <p>Téléphone</p>
    //       <hr />
    //       <p>E-mail</p>
    //       <hr />
         
    //     </div>
    //     </div>
    //   </div>
   
    // </div>
    <>
      <div className="ProfilPatient">
<section className="ProfilPatint-1">
  <div className="photo-pr"><figure></figure></div>
  <ul className="info-pro">
<li><Link to={"/"}><img className="user" src="/public/icon/home.png" alt="" /> Home</Link></li>
<li> <Link><img className="user" src="/public/icon/profile_121261.png" alt="" /> Profil</Link></li>
<li> <Link to={"/LogoutPatin"}> <img className="user"  src="/public/icon/déco2.png" alt="" /> Déconnexion</Link></li>
  </ul>
</section>
<section className="ProfilPatint-2">
<h3>Mes Rendez-Vous</h3>
<div>
</div>

</section>

    </div>
    </>
  );
};

export default ProfilPat;
