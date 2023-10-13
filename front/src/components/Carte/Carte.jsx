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
   //   const [praticienHours, setPraticienHours] = useState([]);
     const onChange = data =>{
       console.log((data)); 
     }

     useEffect(() => {
       getPraticien().then((values) => setPraticien(values.data));
      //  getPraticienHours(1, '2023-12-01').then((values) => setPraticienHours(values.data));
     }, []);
     

  return (
    <div>
               <div className='parcart2'>
                     { 
                        Praticien.map((value)=>( 
                        <div className='imagcart'> 
                        <div className='im'>
                            <figure>
                              <img src={`/img/${value.image}`} alt="" />
                              
                              </figure>
                             
                          
                               <p>{value.firstname} {value.lastname}</p>
                              <p>{value.addersse}</p>
                              <p>{value.specialities}</p></div>
                        
                              {/* <button className='btncart'  type="button">PRENDRE RENDEZ-VOUS</button>         
                              <Calendar  locale  onChange={onChange} value={data}/>  */}
                              <div className="cale"><Calendar   onChange={onChange} value={data}/> <div> {
                                 value.hours.map( el => <p style={ !el.available ? { "color": "red"} : null }>{ el.hours }</p> )
                              } </div></div>
                        
                        </div>))
                     }
               </div>
        
        
    </div>)
}

export default Carte;