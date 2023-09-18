import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import "./SinscrirePr.css";

const Sinscrirepr = () => {
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
     
      <div className="contner-SinscrirePra">
        <form
          action=""
          className="Pratient"
          onSubmit={handleSubmit(submitForm)}
        >
          <p>
            <input
              type="text"
              placeholder="Prénom"
              className="form-sinscrirepra"
              {...register("Prénom", {
                required: "Prénom is required",
                maxLength: {
                  value: 20,
                  message: "Prénom is too long",
                },
                minLength: {
                  value: 2,
                  message: "Prénom is too short",
                },
              })}
            />
            <span className="tob"> {errors.Prénom?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="Nom"
              className="form-sinscrirepra"
              {...register("Nom", {
                required: "Nom is required",
                maxLength: {
                  value: 20,
                  message: "Nom is too long",
                },
                minLength: {
                  value: 2,
                  message: "Nom is too short",
                },
              })}
            />
            <span className="tob"> {errors.Nom?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="email"
              className="form-sinscrirepra"
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            <span className="tob">{errors.email?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="Spécialité"
              id=""
              className="form-sinscrirepra"
              {...register("spécialité", {
                required: "spécialité is required",
                maxLength: {
                  value: 20,
                  message: "Nom is too long",
                },
                minLength: {
                  value: 2,
                  message: "Nom is too short",
                },
              })}
            />
            <span className="tob">{errors.spécialité?.message}</span>
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              id=""
              className="form-sinscrirepra"
              {...register("Password", {
                required: "Password  is required",  
              })}
            />
             <span className="tob">{errors.Password?.message}</span>
          </p>
          <p>
            <input
              type="submit"
              placeholder="S’inscrire"
              className="btn-sinscrirepra"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sinscrirepr;
