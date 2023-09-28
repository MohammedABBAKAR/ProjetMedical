import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { UserContext } from "../providers/PatientProvider";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [stmenu, setmenu] = useState("");

  const { user, setUser } = useContext(UserContext);
  return (
    
    <header className="navbar">
      <Link to="/" className="logo">
        <img
          src="../../public/img/medical care logo template social media  1.png"
          alt="logo"
          className="logo-imag"
        />
      </Link>
    
      <ul className={`nav-link ${stmenu}`}>
    { user ? (<>
      <li>
          <Link to={"/profilepatient"} className="link-comte">Mon compte</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/LogoutPatin"} className="link-comte">Déconnexion</Link>{" "}
        </li></>):(<>
        <li className="dropdown">
          <Link to="/FormePraticien" className="dropbtn">
            Praticien
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/FormePatient" className="dropbtn">
            Patient{" "}
          </Link>
        </li>
        </>)}
       
    

      

      </ul>


      <img
        src="../../public/icon/menu.png"
        alt=""
        className="menu-burger"
        onClick={() => {
          setmenu(stmenu == "" ? "mobile-menu" : "");
        }}
      />
    </header>
  );
};

export default Navbar;
