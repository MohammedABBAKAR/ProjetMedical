import { useContext } from "react";
import { UserContextt } from "../../providers/PraticienProvider";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './ProfilPersoPr.css'
import Navbar from "../../components/Navbar";
import {deletpraticien} from "../../services/apiInfo.js"


function ProfilPersoPr() {
    const  {userP, setUserP}= useContext(UserContextt);

    const navigate = useNavigate();


    const handleClick = async (id) => {
      // console.log(id);
      alert('deleted Profi')
      const responseAPI = await deletpraticien(id);
  
      if (responseAPI.status === 200) {
        // stocke un message dans la session du navigateur
  //j'ai stocké  le message avec la clé 'notice'  après l'authentification
        window.sessionStorage.setItem("notice", "patien deleted");
        navigate('/')
      } else {
        window.sessionStorage.setItem("notice", "Error");
       
      }
  
      setForceUpdate(!forceUpdate);
    };



  return (
    <>
<Navbar/>
    <div id="tabprop">
    <h3>Profil</h3>
    <table id="customer">
      <tr>
        <th>ID</th>
        <th>Nom et Prénom</th>
        <th>Email</th>
        <th>Adresse</th>
        <th></th>
      </tr>
      <tr>
        <td>{userP ? `${userP.id}` : ""}</td>
        <td>{userP ? `${userP.firstname} ${userP.lastname}` : ""}</td>
        <td>{userP ? `${userP.email}` : ""}</td>
        <td>{userP ? `${userP.addersse}` : ""}</td>
        <td>
          <Link to={``} className="buttonn button2">Update</Link>
    <button onClick={() => handleClick(userP.id)} className="buttonn button3">Delete </button>
    </td>
      </tr>
      
    </table>




    </div>


    {/* <div className="grid-container">
  <div>ID</div>
  <div>Nom et Prénom</div>
  <div>Email</div>  
  <div>Adresse</div>
  <div>{userP ? `${userP.id}` : "Loading..."}</div>
  <div>{userP ? `${userP.firstname} ${userP.lastname}` : "Loading..."}</div>
  <div>{userP ? `${userP.email}` : "Loading..."}</div>
  <div>{userP ? `${userP.addersse}` : "Loading..."}</div>
  <div>8</div>
  <div><Link to={``} >Update</Link>
    <button onClick={() => handleClick(userP.id)} >Delete </button></div>
</div> */}


    </>
  )
}

export default ProfilPersoPr