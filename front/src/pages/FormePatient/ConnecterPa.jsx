// import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import "./ConnecterPa.css";
import "../Sinscrire/SinscrirePa.jsx";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {checkpatien} from "../../services/apipa"
import { UserContext } from "../../providers/PatientProvider";





const ConnecterPa = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const  {user, setUser}= useContext(UserContext);

  const navigate =useNavigate();

  const [message, setMessage] = useState()



  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);




  const submitForm = async(values) =>{
  
    const responseAPI  = await checkpatien(values);
  
  if(responseAPI.status===200){

setUser(responseAPI.data);
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
        <form
          action=""
          className="form-pers"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="email"
            name="mail"
            placeholder="Email"
            id=""
            className="Forme-connecterpa"
            {...register("email", {
              required: "Email Address is required",
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
              required: "Password  is required",
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
            <Link to={`/profilepatient`}>profilepatient</Link>
          </div>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ConnecterPa;
