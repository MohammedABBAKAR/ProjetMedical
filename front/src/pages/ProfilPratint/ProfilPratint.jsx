import { Link } from "react-router-dom"
import "./Profil.css"

function ProfilPratint() {
  return (
    <div className="ProfilPratint">
<section className="ProfilPratint-1">
  <div className="photo-pr"><figure></figure></div>
  <ul className="info-pro">
<li><Link to={"/"}><img className="user" src="/public/icon/home.png" alt="" /> Home</Link></li>
<li> <Link><img className="user" src="/public/icon/profile_121261.png" alt="" /> Profil</Link></li>
<li> <Link to={"/LogoutPratient"}> <img className="user"  src="/public/icon/déco2.png" alt="" /> Déconnexion</Link></li>
  </ul>
</section>
<section className="ProfilPratint-2">
<h3>entrer votre spécialité</h3>
<div>
<form action="/action_page.php">
  <input className="inp" list="browsers" name="browser" />
  <datalist id="browsers">
    <option value="Anesthésiologie"></option>
    <option value="Cardiologie"></option>
    <option value="Dermatologie"></option>
    <option value="Endocrinologie"></option>
    <option value="Gastro-entérologie"></option>
    <option value="Gynécologie"></option>
    <option value="Hématologie"></option>
    <option value="Infectiologie"></option>
    <option value="Médecine interne"></option>
    <option value="Néphrologie"></option>
    <option value="Neurologie"></option>
    <option value="Oncologie"></option>
    <option value="Ophtalmologie"></option>
    <option value="Orthopédie"></option>
    <option value="Oto-rhino-laryngologie"></option>
    <option value="Pédiatrie"></option>
    <option value="Psychiatrie"></option>
    <option value="Rhumatologie"></option>
    <option value="Médecine du sport"></option>
    <option value="Médecine d'urgence"></option>
    <option value="Médecine légale"></option>
    <option value="Médecine nucléaire"></option>
    <option value="Médecine physique et de réadaptation"></option>
    <option value="Médecine tropicale"></option>
    <option value="Médecine généraliste"></option>
  </datalist>
  <input className="btn-pro" type="submit" />
</form>
</div>

</section>

    </div>
  )
}

export default ProfilPratint