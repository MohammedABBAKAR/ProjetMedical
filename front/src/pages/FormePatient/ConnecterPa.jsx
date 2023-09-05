// import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import "./ConnecterPa.css";
import "../Sinscrire/SinscrirePa.jsx";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ConnecterPa = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);

  const submitForm = (values) => console.log(values);

  return (
    <div>
      <Navbar />

      <div className="contner">
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
            {...register("Email", {
              required: "Email Address is required",
            })}
          />
          <span className="tob">{errors.Email?.message}</span>

          <input
            type="password"
            name="password"
            placeholder="Password"
            id=""
            className="Forme-connecterpa"
            {...register("Password", {
              required: "Password  is required",
            })}
          />
          <span className="tob">{errors.Password?.message}</span>
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
    </div>
  );
};

export default ConnecterPa;
