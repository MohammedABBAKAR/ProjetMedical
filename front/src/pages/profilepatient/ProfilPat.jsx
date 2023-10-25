import { useContext } from "react";
import { Link } from "react-router-dom";
import  {UserContext} from "../../providers/PatientProvider";
import { deletepatien } from "../../services/apipa.js";
import { useNavigate } from "react-router-dom";
import "./ProfilPa.css";

const ProfilPat = () => {
  const  {user, setUser}= useContext(UserContext);

  const navigate = useNavigate();

  
   // Elle va effectuer une requête API en utilisant deletepatien
  const handleClick = async (id) => {
		// console.log(id);
		const responseAPI = await deletepatien(id);

		if (responseAPI.status === 200) {
      // stocke un message dans la session du navigateur
//j'ai stocké  le message avec la clé 'notice'  après l'authentification
			window.sessionStorage.setItem("notice", "patien deleted");
      navigate('/')
		} else {
			window.sessionStorage.setItem("notice", "Error");
     
		}

		setForceUpdate(!forceUpdate);
	};



  return (
    <>
      <div className="ProfilPatient">
<section className="ProfilPatint-1">
  <div className="photo-pr"><figure></figure></div>
  <ul className="info-pro">
<li><Link to={"/"}><img className="user" src="/public/icon/home.png" alt="" /> Home</Link></li>
<li> <Link><img className="user" src="/public/icon/profile_121261.png" alt="" />   {user ? `${user.firstname}` : "Loading..."}</Link></li>
<li> <Link to={"/LogoutPatin"}> <img className="user"  src="/public/icon/déco2.png" alt="" /> Déconnexion</Link></li>
  </ul>
</section>
<section className="ProfilPatint-2">
<h2 className="probon"> {user ? `Bonjour ${user.firstname}👋` : "Loading..."}</h2>
<div id="rndvous">
  <h3>Mes Rendez-Vous</h3>
  <article>

  </article>
</div>
<hr />
<div id="tabpro">
<h3>Profil</h3>
<table id="customers">
  <tr>
    <th>ID</th>
    <th>Nom et Prénom</th>
    <th>Email</th>
    <th>Adresse</th>
    <th></th>
  </tr>
  <tr>
    <td>{user ? `${user.id}` : "Loading..."}</td>
    <td>{user ? `${user.firstname} ${user.lastname}` : "Loading..."}</td>
    <td>{user ? `${user.email}` : "Loading..."}</td>
    <td>{user ? `${user.addersse}` : "Loading..."}</td>
    <td>
      <Link to={`/UpdatePa/${user.id}`} className="buttonn button2">Update</Link>
<button onClick={() => handleClick(user.id)} className="buttonn button3">Delete </button>
</td>
  </tr>
  
</table>
</div>

</section>

    </div>
    </>
  );
};

export default ProfilPat;
