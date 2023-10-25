// import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import "./ConnecterPa.css";
import "../Sinscrire/SinscrirePa.jsx";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {checkpatien} from "../../services/apipa"
import { UserContext } from "../../providers/PatientProvider";




// pour que je peux  gérer les champs du formulaire et les erreurs associées
const ConnecterPa = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const  {user, setUser}= useContext(UserContext);

  const navigate =useNavigate();


  // pour gérer un message d'erreur ou de succès  qui peut affiché à l'utilisateur
  const [message, setMessage] = useState()


  // pour surveiller les changements dans le formulaire 
  // en utilisant watch et logue ces changements dans la console
  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);

  // lorsque le formulaire est soumis par patient j'appelle la fonction submitForm
  // Elle va effectuer une requête API en utilisant checkpatien

  const submitForm = async(values) =>{
  
    const responseAPI  = await checkpatien(values);
  
  if(responseAPI.status===200){

setUser(responseAPI.data);
// stocke un message dans la session du navigateur
//j'ai stocké  le message avec la clé 'notice'  après l'authentification
window.sessionStorage.setItem('notice','you are connected');
navigate('/')

} else {
  setMessage('Invalid credentials')
  setTimeout(()=> setMessage(), 5000);
}
  
  
  
console.log(values);
  
  
  } 

  return (
    <div>
    

      <div className="contner">
      <p>{message}</p>
      {/* <p>{user.firstname}</p> */}
        <form
          action=""
          className="form-pers"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            id=""
            className="Forme-connecterpa"
            {...register("email", {
              required: "email Address is required",
            })}
          />
          <span className="tob">{errors.email?.message}</span>

          <input
            type="password"
            name="password"
            placeholder="password"
            id=""
            className="Forme-connecterpa"
            {...register("password", {
              required: "password  is required",
            })}
          />
          <span className="tob">{errors.password?.message}</span>
          <input
            type="submit"
            value="Se connecter"
            className="btn-connecterpa"
          />
          <div className="lien">
            <Link to={`/Motpass`}>Mot de passe oublié ?</Link>
            <Link to={`/Sinscrire`}>S’inscrire</Link>
          </div>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ConnecterPa;
