import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Profil.css";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { UserContextt } from "../../providers/PraticienProvider";

function ProfilPratint() {
  const  {userP, setUserP}= useContext(UserContextt);

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm();

  const onSubmit = async () => {
    console.log(responseAPI);
  };

  useEffect(() => {
    const observer = watch((values) => console.log(values));

    return () => {
      observer.unsubscribe();
    };
  }, [watch]);

  return (
    <div className="ProfilPratint">
      <section className="ProfilPratint-1">
        <div className="photo-pr">
          <figure>
          {userP ?console.log(userP.image): console.log("bien")}

            {/* <img src={userP ? userP.image : '/'} alt="" /> */}
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
            <Link>
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
        <h3>entrer votre spécialité</h3>
        {/* <div>
          <form action="/action_page.php" onSubmit={handleSubmit(onSubmit)}>
            <input className="inp" list="browsers" name="browser" />
            <datalist id="browsers">
              <option value=" 1 Anesthésiologie"></option>
              <option value=" 2 Cardiologie"></option>
              <option value=" 3 Dermatologie"></option>
              <option value=" 4 Endocrinologie"></option>
              <option value=" 5 Gastro-entérologie"></option>
              <option value=" 6 Gynécologie"></option>
              <option value=" 7 Hématologie"></option>
              <option value=" 8 Infectiologie"></option>
              <option value=" 9 Médecine interne"></option>
              <option value=" 10 Néphrologie"></option>
              <option value=" 11 Neurologie"></option>
              <option value=" 12 Oncologie"></option>
              <option value=" 13 Ophtalmologie"></option>
              <option value=" 14 Orthopédie"></option>
              <option value=" 15 Oto-rhino-laryngologie"></option>
              <option value=" 16 Pédiatrie"></option>
              <option value=" 17 Psychiatrie"></option>
              <option value=" 18 Rhumatologie"></option>
              <option value=" 19 Médecine du sport"></option>
              <option value=" 20 Médecine d'urgence"></option>
              <option value=" 21 Médecine légale"></option>
              <option value=" 22 Médecine nucléaire"></option>
              <option value=" 23 Médecine physique et de réadaptation"></option>
              <option value=" 24 Médecine tropicale"></option>
              <option value=" 25 Médecine généraliste"></option>
            </datalist>
            <input className="btn-pro" type="submit" />
          </form>
        </div> */}
      </section>
    </div>
  );
}

export default ProfilPratint;
