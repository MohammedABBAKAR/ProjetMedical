import React ,{ useEffect,useState}from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Carte.css'
import Navbar from '../Navbar';
import Fotter from '../Fotter';
import { getPraticien } from '../../services/api';

// import {getPraticien} from "../../services/api"
// import SearchBar from '../SearchBar/SearchBar';
function Carte() {
     const [data , setData] = useState(new Date ());
     const [Praticien, setPraticien] = useState([]);
     const onChange = data =>{
        setData(data);
     }

     useEffect(() => {
    
       getPraticien().then((values) => setPraticien(values.data));
     }, []);

  return (
    <div>
        {/* <Navbar/> */}
         <div className='parcart'>
               <div className='parcart2'>
                     <div className='imagcart'>
                     
                     <figure>
                     {/* <img src="../../../public/img/IMG-123.jpg" alt="" /> */}
                     
                     </figure>
                     { 
                        Praticien.map((value)=>(<div><h3>{value.firstname}</h3></div>))
                     } 
                     </div>
                   
                     {
                        Praticien.map( value => <>
                   
                           <p>{value.addersse}</p>
                           <button className='btncart'  type="button">PRENDRE RENDEZ-VOUS</button>         
                           <Calendar  locale  onChange={onChange} value={data}/> )
                        </>)
                     }
               </div>
         </div>
    </div>)
}

export default Carte;