import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./ConnecterPr.css";
import { checkUser } from "../../services/apiInfo";
import { UserContextt } from "../../providers/PraticienProvider";
import { UserContext } from "../../providers/PatientProvider";

const ConnecterPr = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState()
  const navigat = useNavigate();
  const { userP, setUserP } = useContext(UserContextt);
  const  {user, setUser}= useContext(UserContext);



  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);






  const submitForm = async (values) => {
    const responseAPI = await checkUser(values);

    if (responseAPI.status === 200) {
      setUser(responseAPI.data);
      window.sessionStorage.setItem("notice", "you are connected");
      navigat("/");
    } else {
      setMessage("Invalid credentials");
      setTimeout(() => setMessage(), 5000);
    }

    console.log(values);
  };






  return (
    <>
      <div>
        <div className="contnerpr">
        <p>{message}</p>
          <form
            action=""
            className="form-pers2"
            onSubmit={handleSubmit(submitForm)}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              id=""
              className="Forme-connecterpra"
              {...register("email", {
                required: "email Address is required",
              })}
            />
            <span className="tob">{errors.Email?.message}</span>
            <input
              type="password"
              name="password"
              placeholder="password"
              id=""
              className="Forme-connecterpra"
              {...register("password", {
                required: "password  is required",
              })}
            />
            <span className="tob">{errors.password?.message}</span>
            <input
              type="submit"
              value="Se connecter"
              className="btn-connecterpra"
            />
            <div className="lienpr">
              {" "}
              <Link to={`/Motpass`}>Mot de passe oublié ?</Link>
              <Link to={`/Sinscrirepra`}>S’inscrire</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConnecterPr;
