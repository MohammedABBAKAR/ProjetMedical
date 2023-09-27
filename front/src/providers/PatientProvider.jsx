import { createContext, useState } from "react";
const UserContext = createContext();
function PatientProvider({children}) {
    const [user, setUser] = useState(); 
  return (
    <UserContext.Provider value={{user, setUser}}>
   {children}

    </UserContext.Provider>
  )
}

export {PatientProvider ,UserContext}