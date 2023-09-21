// import "./Main.css";
// import {useEffect, useState } from "react";

// import {getSpecialty} from "../services/api";

// const Main = () => {
//   // const data = ["Médecine généraliste", "Dermatologie", "Anesthésiologie", "Médecine du sport", "Neurologie"];
//   const [Specialty, setSpecialty] = useState([]);




//   useEffect(() => {

//     // récupérer les Specialtys à partir de L'API

//     getSpecialty().then((values) => setSpecialty(values.data));


// }, []);

//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div className="box">
       
//       <div className="backg">
//         <div className="mains">
//           <h1>Rendez vous avec vos Professionnels </h1>
//           <form  className="form-main">
//             <input type="text" name="search"  value={Specialty} onChange={handleChange} placeholder="Search..." className="FormeMain1" />
//             <input type="submit" name="" value="Search" className="btn-main" onClick={() => console.log(value)} />
//           </form>
//           <ul>
//         {Specialty &&
//           data
//             .filter((element) =>
//               element.toLowerCase().includes(value.toLowerCase())
//             )
//             .map((element, index) => (
//               <li onClick={() => setSpecialty(element.name)} key={index}>
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




import "./Main.css";
import { useEffect, useState } from "react";
import { getSpecialty } from "../services/api";

const Main = () => {
  const [value, setValue] = useState(""); 
  const [Specialty, setSpecialty] = useState([]);

  useEffect(() => {
 
    // getSpecialty().then((values) => setSpecialty(values.data));
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
    getSpecialty(event.target.value).then((values) => setSpecialty(values.data));
  }

  return (
    <div className="box">
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
          <ul>
            {Specialty.filter((element) =>
              element.name.toLowerCase().includes(value.toLowerCase())
            ).map((element) => (
              <li onClick={() => setSpecialty([element.name])}>
                {element.name}
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