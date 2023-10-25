// import './App.css'
import ConnecterPa from "./pages/FormePatient/ConnecterPa";
// import ErrorPage from "./pages/EError-page";

import ConnecterPr from "./pages/FormePraticien/ConnecterPr";
import OublieMot from "./pages/Motpass/OublieMot";
import SinscrirePa from "./pages/Sinscrire/SinscrirePa";
import Sinscrirepr from "./pages/Sinscrirepra/SinscrirePr";
import ProfilPat from "./pages/profilepatient/ProfilPat";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carte from "./components/Carte/Carte";
import Propos from "./pages/Propos/Propos";
import Mainlayout from "./layout/Mainlayout";
import { PatientProvider } from "./providers/PatientProvider";
import LogoutPatin from "./pages/LogoutPatin/LogoutPatin";
import ProfilPratint from "./pages/ProfilPratint/ProfilPratint";
import { PraticienProvider } from "./providers/PraticienProvider";
import LogoutPratient from "./pages/LogoutPatin/LogoutPratient";
import Testt from "./pages/Testt/Testt";
import EErrorPage from "./pages/Error404/EErrorPage";
import UpdatePa from "./pages/Updatepa/UpdatePa";
import ProfilPersoPr from "./pages/ProfilPersoPr/ProfilPersoPr";
function App() {
  const router = createBrowserRouter([
   {   path: '/',
   element:<Mainlayout/>,
   errorElement: <EErrorPage />,
   children:[
    {    
      path: "/",
      element: <Home />,
      // errorElement: <EErrorPage />,
    
    },
    {
      path: "FormePatient",
      element: <ConnecterPa />
    },
    {
      path: "FormePraticien",
      element: <ConnecterPr />
    },
    {
      path: "Sinscrire",
      element: <SinscrirePa />
    },
    {
      path: "Sinscrirepra",
      element: <Sinscrirepr/>
    },
    {
      path: "Motpass",
      element: <OublieMot/>
    },
    {
      path: "profilepatient",
      element: <ProfilPat/>
    },
    {
      path: "Carte",
      element: <Carte/>
    },
    {
      path: "Propos",
      element: <Propos/>
    },
    {
      path: "LogoutPatin",
      element: <LogoutPatin/>
    },

  
    {
      path: "LogoutPratient",
      element: <LogoutPratient/>
    },
    {
      path: "Testt",
      element: <Testt/>
    },
    {
      path: "Updatepa/:id",
      element: <UpdatePa/>
    },
 

    ] ,

  },
  {
    path: "ProfilPratint",
    element: <ProfilPratint/>
  },
  {
    path: "ProfilPersoPr",
    element: <ProfilPersoPr/>
  },
  ]);

  return <PatientProvider>
<PraticienProvider>
   <RouterProvider router={router} />;
   </PraticienProvider>
   </PatientProvider>
}

export default App;
