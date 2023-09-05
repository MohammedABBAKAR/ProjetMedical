import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
 
  const [stmenu, setmenu] = useState("");
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
        <li><img className="icon-user" src="../../public/icon/3741756-bussiness-ecommerce-marketplace-onlinestore-store-user_108907.png" alt="" /></li>
    {/* <li className="icon-user"> <AccountCircleIcon/></li> */}
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
