import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import "./SinscrirePr.css";
import { createUser } from "../../services/apiInfo";
import { useNavigate } from "react-router-dom";




const Sinscrirepr = () => {
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

  const submitForm = async(values) =>{
    
    const responseAPI  = await createUser(values);
    console.log(responseAPI);
    
    
    
    window.sessionStorage.setItem('notice',"Account created");
    
    
    navigate('/');
    
    
    
    console.log(values);} 

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
              {...register("firstname", {
                required: "firstname is required",
                maxLength: {
                  value: 20,
                  message: "firstname is too long",
                },
                minLength: {
                  value: 2,
                  message: "firstname is too short",
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
              {...register("lastname", {
                required: "lastname is required",
                maxLength: {
                  value: 20,
                  message: "lastname is too long",
                },
                minLength: {
                  value: 2,
                  message: "lastname is too short",
                },
              })}
            />
            <span className="tob"> {errors.Nom?.message}</span>
          </p>
          <p>
            <input
              type="text"
              placeholder="addersse"
              id=""
              className="form-sinscrirepra"
              {...register("addersse", {
                required: "addersse is required",
                maxLength: {
                  value: 20,
                  message: "addersse is too long",
                },
                minLength: {
                  value: 2,
                  message: "addersse is too short",
                },
              })}
            />
            <span className="tob">{errors.addersse?.message}</span>
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
              type="password"
              placeholder="password"
              id=""
              className="form-sinscrirepra"
              {...register("password", {
                required: "password  is required",  
              })}
            />
             <span className="tob">{errors.Password?.message}</span>
          </p>
          <p>
            <input
              type="file"
   
              placeholder="image"
              id=""
              className="form-sinscrirepra"
              {...register("image", {
                required: "image is required",
                maxLength: {
                  value: 20,
                  message: "image is too long",
                },
                minLength: {
                  value: 2,
                  message: "image is too short",
                },
              })}
            />
            <span className="tob">{errors.addersse?.message}</span>
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
