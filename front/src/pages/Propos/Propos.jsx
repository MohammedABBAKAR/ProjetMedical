import React from 'react'
import Navbar from "../../components/Navbar";
import './Propos.css'
import Fotter from '../../components/Fotter';
import Svg from '../../components/SVG/Svg';
import SectionCom from '../../components/Fotters/SectionCom';
function Propos() {
  return (
    <div>
         {/* <Navbar /> */}

    
        <div className='bg-propos'> 
      <p>Une consultation un clic une santé optimale</p>
        </div>
        <Svg/>
        <SectionCom/>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,160L120,154.7C240,149,480,139,720,133.3C960,128,1200,128,1320,128L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        {/* <Fotter/> */}
        </div>
        
  )
}

export default Propos