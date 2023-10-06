
import "./Main.css";
import { useEffect, useState } from "react";
import { getSpecialty } from "../services/api";
import { Link } from "react-router-dom";

const Main = () => {
  const [value, setValue] = useState(""); 
  const [Specialty, setSpecialty] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    
 
    // getSpecialty().then((values) => setSpecialty(values.data));
  }, []);



  useEffect( ()=>{
    //si un message existe en session 
    if(window.sessionStorage.getItem("notice")){
    
      //stocker le massage dans l'état
      setMessage(window.sessionStorage.getItem('notice'));
    
    
      //supprimer le message en session
      window.sessionStorage.removeItem('notice');
    
      //faire disparaître le message aprés un délai en millisecondes
    
      setTimeout(()=> setMessage(null), 5000);
    }
    
    });
    









  function handleChange(event) {
    setValue(event.target.value);
    // Appel de la fonction getSpecialty() pour obtenir les spécialités correspondantes
    getSpecialty(event.target.value).then((values) => setSpecialty(values.data));
  }

  return (
    
    <div className="box">
       <h3 className="message">{message}</h3>
      <div className="backg">
     
        <div className="mains">
          <h1>Rendez-vous avec vos Professionnels</h1>
          <form className="form-main">
            <input
              type="text"
              name="search"
              value={value}
              onChange={handleChange}
              placeholder="Search..."
              className="FormeMain1"
            />
            <input
              type="submit"
              name=""
              value="Search"
              className="btn-main"
              onClick={() => console.log(value)}
            />
          </form>
          <ul className="lienmotor">
            {Specialty.filter((element) =>
              element.name.toLowerCase().includes(value.toLowerCase())
            ).map((element) => (
              <li onClick={() => setSpecialty([element.name])}>
                <Link to={`/Carte`} >{element.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;




// import "./Main.css";
// import { useState } from "react";
// const Main = () => {
//   const data = ["Médecine généraliste", "Dermatologie", "Anesthésiologie", "Médecine du sport", "Neurologie"];
//   const [value, setValue] = useState("");

//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div className="box">
       
//       <div className="backg">
//         <div className="mains">
//           <h1>Rendez vous avec vos Professionnels </h1>
//           <form  className="form-main">
//             <input type="text" name="search"  value={value} onChange={handleChange} placeholder="Search..." className="FormeMain1" />
//             <input type="submit" name="" value="Search" className="btn-main" onClick={() => console.log(value)} />
//           </form>
//           <ul>
//         {value &&
//           data
//             .filter((element) =>
//               element.toLowerCase().includes(value.toLowerCase())
//             )
//             .map((element, index) => (
//               <li onClick={() => setValue(element)} key={index}>
//                 {element}
//               </li>
//             ))}
//       </ul>
//         </div>
   
//       </div>
 
//     </div>
//   );
// };

// export default Main;