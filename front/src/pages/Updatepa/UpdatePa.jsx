import "./UpdatePa.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/PatientProvider";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

import axios from "axios";

function UpdatePa() {
  const [email, setEmail] = useState('');
  
  // const { user } = useContext(UserContext);
  // const { id } = useParams();

  const { user } = useContext(UserContext);

  const id = user ? user.id : null;
  const navigate = useNavigate(); 

  
  // Lorsque le composant est monté ou lorsque la 
  // dépendance id change, il effectue une requête GET vers une URL
  // requête est destinée à récupérer les informations du patient avec l'ID
  useEffect(() => {
    axios.get(`http://localhost:3000/patient/${id}`)
      .then((res) => {
        setEmail(res.data.email);
      })
      .catch((err) => console.log(err));
  }, [id]);


const handleSubmit = async (event) => {
  // fonction empêche le comportement par défaut de l'événement de soumission
    event.preventDefault();
    try {
      // elle envoie une requête HTTP pour mettre à jour le courrier électronique du patient 
      const res = await axios.put(`http://localhost:3000/patient/update/${id}`, { email });
      if (res.data.Updated) {
        navigate('/'); 
      } else {
        alert("Not updated");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="upd">
      <form onSubmit={handleSubmit} className="update-form">
        <div className="update-form__content">
          <div className="update-form__header">Update your account</div>
          <input
            className="update-form__input"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="update-form__input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="update-form_button" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePa;
