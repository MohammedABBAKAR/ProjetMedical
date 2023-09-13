import React ,{useState}from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Carte.css'
import Navbar from '../Navbar';
// import SearchBar from '../SearchBar/SearchBar';
function Carte() {
     const [data , setData] = useState(new Date ());

     const onChange = data =>{
        setData(data);
     }
  return (
    <div>
        <Navbar/>
    <div className='parcart'>
 <div className='parcart2'>
      <div className='imagcart'>
       
        <figure>
        <img src="../../../public/img/IMG-123.jpg" alt="" />
        </figure>
         <div><h3>mohammed abbakar</h3></div>
      </div>
      <p>addresse</p>
      {/* <p>1 rue ariste briad</p> */}
      <button className='btncart'  type="button">PRENDRE RENDEZ-VOUS</button>
      </div>

<Calendar  locale  onChange={onChange} value={data}/>
{/* {console.log(data)}

{data.toString()} */}

    </div>
    {/* <SearchBar/> */}
    
    </div>
  )
}

export default Carte