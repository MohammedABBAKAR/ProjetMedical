// import './App.css'
import ConnecterPa from "./pages/FormePatient/ConnecterPa";


import ConnecterPr from "./pages/FormePraticien/ConnecterPr";
import OublieMot from "./pages/Motpass/OublieMot";
import SinscrirePa from "./pages/Sinscrire/SinscrirePa";
import Sinscrirepr from "./pages/Sinscrirepra/SinscrirePr";
import ProfilPat from "./pages/profilepatient/ProfilPat";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "FormePatient",
      element: <ConnecterPa />,
    },
    {
      path: "FormePraticien",
      element: <ConnecterPr />,
    },
    {
      path: "Sinscrire",
      element: <SinscrirePa />,
    },
    {
      path: "Sinscrirepra",
      element: <Sinscrirepr/>,
    },
    {
      path: "Motpass",
      element: <OublieMot/>,
    },
    {
      path: "profilepatient",
      element: <ProfilPat/>,
    },
  
    
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;