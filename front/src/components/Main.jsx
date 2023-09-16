import "./Main.css";
import { useState } from "react";
const Main = () => {
  const data = ["Médecine généraliste", "Dermatologie", "Anesthésiologie", "Médecine du sport", "Neurologie"];
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="box">
       
      <div className="backg">
        <div className="mains">
          <h1>Rendez vous avec vos Professionnels </h1>
          <form  className="form-main">
            <input type="text" name="search"  value={value} onChange={handleChange} placeholder="Search..." className="FormeMain1" />
            <input type="submit" name="" value="Search" className="btn-main" onClick={() => console.log(value)} />
          </form>
          <ul>
        {value &&
          data
            .filter((element) =>
              element.toLowerCase().includes(value.toLowerCase())
            )
            .map((element, index) => (
              <li onClick={() => setValue(element)} key={index}>
                {element}
              </li>
            ))}
      </ul>
        </div>
   
      </div>
 
    </div>
  );
};

export default Main;
