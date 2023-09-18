import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import "./Sinscrire.css";

const SinscrirePa = () => {
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
    
      <div className="contner-SinscrirePa">
        <form action="" className="Patient" onSubmit={handleSubmit(submitForm)}>
          <p>
            <input
              type="text"
              placeholder="Prénom"
              className="form-sinscrirepa"
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
              className="form-sinscrirepa"
              {...register(
                "Nom",
               
                {
                  required: "Nom is required",
                  maxLength: {
                    value: 20,
                    message: "Nom is too long",
                  },
                  minLength: {
                    value: 2,
                    message: "Nom is too short",
                  },
                }
              )}
            />
            <span className="tob"> {errors.Nom?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="Email"
              className="form-sinscrirepa"
              {...register("Email", {
                required: "Email Address is required",
              })}
            />
            <span className="tob">{errors.Email?.message}</span>
          </p>
          <p>
            <input
              type="date"
              placeholder="age"
              id=""
              className="form-sinscrirepa"
              {...register("age", {
                required: "Date de naissance is required",
                min: 18,
                max: 99,
                
              })}
            />
            <span className="tob">{errors.age?.message}</span>
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              id=""
              className="form-sinscrirepa"
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
              className="btn-sinscrirepa"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default SinscrirePa;
