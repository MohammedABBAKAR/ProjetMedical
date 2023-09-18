import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./ConnecterPr.css";

const ConnecterPr = () => {
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
    <>
    
      <div>
        <div className="contnerpr">
          <form
            action=""
            className="form-pers2"
            onSubmit={handleSubmit(submitForm)}
          >
            <input
              type="email"
              name="mail"
              placeholder="Email"
              id=""
              className="Forme-connecterpra"
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
              className="Forme-connecterpra"
              {...register("Password", {
                required: "Password  is required",
              })}
            />
            <span className="tob">{errors.Password?.message}</span>
            <input
              type="submit"
              value="Se connecter"
              className="btn-connecterpra"
            />
            <div className="lienpr">
              {" "}
              <Link to={`/Motpass`}>Mot de passe oublié ?</Link>
              <Link to={`/Sinscrirepra`}>S’inscrire</Link>
              <Link to={`/Carte`}>Carte</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConnecterPr;
