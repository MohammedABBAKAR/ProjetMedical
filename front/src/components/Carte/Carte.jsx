import React ,{ useEffect,useState}from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Carte.css'
import { getPraticien, getPraticienHours } from '../../services/api';
import {  v4 as uuid } from 'uuid';


// import {getPraticien} from "../../services/api"
// import SearchBar from '../SearchBar/SearchBar';
function Carte() {
     const [data , setData] = useState(new Date ());
     const [Praticien, setPraticien] = useState([]);
     const [praticienHours, setPraticienHours] = useState([]);
     const onChange = data =>{
        setData(data);
     }

     useEffect(() => {
       getPraticien().then((values) => setPraticien(values.data));
       getPraticienHours(1, '2023-12-01').then((values) => setPraticienHours(values.data));
     }, []);

  return (
    <div>
                     

         <div className='parcart'>
               <div className='parcart2'>

                         
                    
                     { 
                        Praticien.map((value)=>( 
                        <div className='imagcart'>
                            <figure>
                              <img src={`/img/${value.image}`} alt="" />
                              
                              </figure>
                              
                           <h3>{value.firstname} {value.lastname}</h3>
                           <div>
                              <p>{value.addersse}</p>
                              <p>{value.specialities}</p>
                              
                              {/* <ul>
                                 {
                                    value.specialities.split(',').map( el => {
                                       <li key={uuid()}>{ el }</li>
                                    } )
                                 }
                              </ul> */}
                              {/* <button className='btncart'  type="button">PRENDRE RENDEZ-VOUS</button>          */}
                              {/* <Calendar  locale  onChange={onChange} value={data}/>  */}
                              <Calendar   onChange={onChange} value={data}/> 
                           </div>
                        </div>))
                     }
                   
                   
                     {/* {
                        Praticien.map( value => <>
                           <p>{value.specialty_name}</p>
                           <p>{value.praticien_addersse}</p>
                           <button className='btncart'  type="button">PRENDRE RENDEZ-VOUS</button>         
                           <Calendar  locale  onChange={onChange} value={data}/> 
                        </>)
                     } */}
               </div>
               <div>
               {
                              praticienHours.map( el => {
                                 // console.log(el.hours);
                                 return <p style={ !el.available ? { "color": "red"} : null } >{  el.hours }</p>
                              })
                    }
               </div>
         </div>
    </div>)
}

export default Carte;