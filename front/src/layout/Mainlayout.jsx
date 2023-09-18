import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Fotter from "../components/Fotter"


function Mainlayout() {
  return (
    <div>
<Navbar/>
<Outlet/>
<Fotter/>
    </div>
  )
}

export default Mainlayout