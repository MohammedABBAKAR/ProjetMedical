import { createContext, useState } from "react";
const UserContextt = createContext();
function PraticienProvider({children}) {
    const [userP, setUserP] = useState(); 
  return (
    <UserContextt.Provider value={{userP, setUserP}}>
   {children}

    </UserContextt.Provider>
  )
}

export {PraticienProvider ,UserContextt}