import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import "./Sinscrire.css";
import {creatpatien} from "../../services/apipa"
import { useNavigate } from "react-router-dom";
const SinscrirePa = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();


  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);





  const submitForm = async(values) => {

    const responseAPI  = await creatpatien(values);
    console.log(responseAPI);


    window.sessionStorage.setItem('notice',"Account created");

    navigate('/');




    // console.log(values);
  }

  return (
    <div>
    {/* firstname, :lastname, :birthday, :addersse, :email, :password */}
      <div className="contner-SinscrirePa">
        <form action="" className="Patient" onSubmit={handleSubmit(submitForm)}>
          <p>
            <input
              type="text"
              placeholder="Prénom"
              className="form-sinscrirepa"
              {...register("firstname", {
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
            <span className="tob"> {errors.firstname?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="Nom"
              className="form-sinscrirepa"
              {...register(
                "lastname",
               
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
            <span className="tob"> {errors.lastname?.message}</span>
          </p>
          <p>
            <input
              type="date"
              placeholder="age"
              id=""
              className="form-sinscrirepa"
              {...register("birthday", {
                required: "Date de naissance is required",
                min: 18,
                max: 99,
                
              })}
            />
            <span className="tob">{errors.birthday?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="addersse"
              className="form-sinscrirepa"
              {...register(
                "addersse",
               
                {
                  required: "addersse is required",
                  maxLength: {
                    value: 20,
                    message: "addersse too long",
                  },
                  minLength: {
                    value: 2,
                    message: "addersse is too short",
                  },
                }
              )}
            />
            <span className="tob"> {errors.addersse?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="Email"
              className="form-sinscrirepa"
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            <span className="tob">{errors.email?.message}</span>
          </p>
       
          <p>
            <input
              type="password"
              placeholder="Password"
              id=""
              className="form-sinscrirepa"
              {...register("password", {
                required: "Password  is required",  
              })}
            />
             <span className="tob">{errors.password?.message}</span>
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
