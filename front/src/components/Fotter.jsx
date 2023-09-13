import { Link } from "react-router-dom";



import "./Fotter.css";
const Fotter = () => {
  return (
    <footer className="footer">
<section className="footer-specialiste">
  <h4 >Trouvez votre Spécialisté</h4>
  <div className="titr-specialiste">
  <ul>
  <li><a href="">Anesthésiologie</a></li>
  <li><a href="">Cardiologie</a></li>
  <li><a href="">Dermatologie</a></li>
  <li><a href="">Endocrinologie</a></li>
  <li><a href="">Gastro-entérologie</a></li>
  <li><a href="">Gynécologie</a></li>
  <li><a href="">Hématologie</a></li>
  <li><a href="">Infectiologie</a></li>
  <li><a href="">Médecine interne</a></li>
  <li><a href="">Néphrologie</a></li>
  <li><a href="">Neurologie</a></li>
  <li><a href="">Oncologie</a></li>
  <li><a href="">Ophtalmologie</a></li>
  <li><a href="">Orthopédie</a></li>
  <li><a href="">Oto-rhino-laryngologie</a></li>
  </ul>
  <ul>
  <li><a href="">Pédiatrie</a></li>
  <li><a href="">Psychiatrie</a></li>
  <li><a href="">Rhumatologie</a></li>
  <li><a href="">Médecine du sport</a></li>
  <li><a href="">Médecine d'urgence</a></li>
  <li><a href="">Médecine légale</a></li>
  <li><a href="">Médecine nucléaire</a></li>
  <li><a href="">Médecine physique</a></li>
  <li><a href="">Médecine tropicale</a></li>
  <li><a href="">Médecine généraliste</a></li>
  </ul></div>
</section>
<section className="footer-propos">
  <h4>À propos de Médical</h4>
  <Link to="/Propos"><p>Qui sommes-nous</p></Link>
</section>
<section className="footer-social">
  <h4>Retrouvez-nous</h4>
  <ul className="icon">
    <li><a href="" ><img className="icon-social" src="../../public/icon/fb_icon-icons.com_65434.png" alt="" /></a></li>
    <li><a href=""><img className="icon-social" src="../../public/icon/twitter_icon-icons.com_65436.png" alt="" /></a></li>
    <li><a href=""><img className="icon-social" src="../../public/icon/instagram_black_logo_icon_147122.png" alt="" /></a></li>
    <li><a href=""><img className="icon-social" src="../../public/icon/youtube_black_logo_icon_147044.png" alt="" /></a></li>
    </ul>
</section>

   
    </footer >

    // <p className="footer-links"></p>
  );
};

export default Fotter;
