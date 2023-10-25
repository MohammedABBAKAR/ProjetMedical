import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Profil.css";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { UserContextt } from "../../providers/PraticienProvider";
import { createSpes} from "../../services/apiInfo";

import CalenPr from "../../components/Calendar-2/CalenPr";
import { getSpecialt } from "../../services/api";
import Navbar from "../../components/Navbar";




// const localizer = momentLocalizer(moment)




function ProfilPratint() {
  const  {userP, setUserP}= useContext(UserContextt);
  const [Specialty, setSpecialty] = useState([]); 
  const navigate = useNavigate();


  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm();


  useEffect(() => {
    // Récupérez les spécialités à partir de l'API ou de la source de données
    getSpecialt()
      .then((response) => {
        setSpecialty(response.data);
        console.log(Specialty); // La mise à jour de l'état est maintenant reflétée
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des spécialités:", error);
      });
  }, []);
  

  const onSubmit = async (values) => {
    // Assurez-vous que `values` est correctement formaté en tant qu'objet JSON
    const jsonData = {
      specialty_id: values.specialty_id,
      praticien_id: values.praticien_id,
    };
  
    const responseAPI = await createSpes(jsonData);
  
    if (responseAPI.status === 200) {
      setUserP(responseAPI.data);
      window.sessionStorage.setItem("notice", "ok ok");
      navigate("/");
    } else {
      console.log("Error: not ok");
      setTimeout(() => {
        // Affichez le message d'erreur ou effectuez d'autres actions ici
      }, 5000);
    }
  };
  
  function getPraticienId() {
    // Remplacez cette logique par la façon dont vous obtenez l'ID du praticien.
    // Cela peut dépendre de la façon dont vous gérez l'authentification ou la session.
    // Par exemple, si vous stockez l'ID du praticien dans le contexte, vous pouvez le récupérer à partir du contexte.
    // Assurez-vous de retourner l'ID du praticien ici.
  
    // Exemple simple :
    const userP = useContext(UserContextt);
    if (userP) {
      return userP.praticien_id; // Assurez-vous que cela correspond à la structure de votre objet utilisateur.
    }
    
    // Vous devez adapter cette logique à votre application.
  }
  
  
  
  const handleSpecialtySelection = async (event) => {
    event.preventDefault();
    const selectedSpecialtyId = event.target.elements.specialty_id.value;
  
    // Récupérez l'ID du praticien depuis le contexte d'authentification ou la session
    const praticienId = getPraticienId(); // Remplacez par la méthode appropriée
  
    // Effectuez une requête pour associer la spécialité au praticien
    const response = await createSpes({
      specialty_id: selectedSpecialtyId,
      praticien_id: praticienId,
    });
  
    if (response.status === 200) {
      // La spécialité a été associée avec succès
      // Redirigez le praticien vers sa page de profil ou une autre page pertinente
    } else {
      // Gérez les erreurs, affichez un message d'erreur, etc.
    }
  };
  

  useEffect(() => {
    const observer = watch((values) => console.log(values));

    return () => {
      observer.unsubscribe();
    };
  }, [watch]);

  return ( <> <Navbar/>
    <div className="ProfilPratint">
    
      <section className="ProfilPratint-1">
        <div className="photo-pr">
          <figure>
             <img src="" alt="" />
          </figure>
        </div>
        <ul className="info-pro">
          <li>
            <Link to={"/"}>
              <img className="user" src="/public/icon/home.png" alt="" /> Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/ProfilPersoPr"}>
              <img
                className="user"
                src="/public/icon/profile_121261.png"
                alt=""
              />{" "}
             
             {userP ? `${userP.firstname}` : "Loading..."}

            </Link>
          </li>
          <li>
            {" "}
            <Link>
              <img
                className="user"
                src="/public/icon/mail.png"
                alt=""
              />{" "}
             
             {userP ? ` ${userP.email}` : "Loading..."}

            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/LogoutPratient"}>
              {" "}
              <img className="user" src="/public/icon/déco2.png" alt="" />{" "}
              Déconnexion
            </Link>
          </li>
        </ul>
      </section>
      <section className="ProfilPratint-2">
        <h2 className="probon"> {userP ? `Bonjour ${userP.firstname}👋` : "Loading..."}</h2>
       
       
   <div id="formHand">   
<form  onSubmit={handleSpecialtySelection}>
  <label>Choisir une spécialité:</label>
  <select name="specialty_id">
    {Specialty.map((valuess) => (
      <option key={valuess.id} value={valuess.id}>
        {valuess.name}
      </option>
    ))}
  </select>
  <button type="submit">Confirmer</button>
</form>
</div>


<CalenPr/>


      </section>
      
         
    </div></>
  );
}

export default ProfilPratint;
