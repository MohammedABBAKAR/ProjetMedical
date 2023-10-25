const VITE_API_URL = import.meta.env.VITE_API_URL;


const  getSpecialty = async (value)=> {


    const requestInfos = new Request(`${VITE_API_URL}/specialty/limit/3/${value}`,{
        method: "get",
    });
    
    const requete = await fetch(requestInfos);


    const respose = await requete.json();

     return respose;


};


// confiqurer la requête HTTP

const  getSpecialt = async (value)=> {

    // en cette ligne je veux envoyer la requête HTTP définie précédemment
    //  en utilisant la fonction fetch(). La fonction fetch() 
    //  retourne une promesse qui résoudra la réponse de la 
    //  requête lorsqu'elle sera disponible
    const requestInfos = new Request(`${VITE_API_URL}/specialty`,{
        method: "get",
    });
    //exécuter la requête HTTP
    const requete = await fetch(requestInfos);


//récupérer la répose  HTTP
    const respose = await requete.json();

     return respose;


};




const  getPraticien = async ()=> {


    const requestInfost = new Request(`${VITE_API_URL}/praticien`,{
        method: "get",
    });
    
    const requetet = await fetch(requestInfost);


    const resposet = await requetet.json();

     return resposet;


};

const  getPraticienHours = async (id, date)=> {

    const requestInfost = new Request(`${VITE_API_URL}/praticien/${id}/${date}/hours`,{
        method: "get",
    });
    
    const requetet = await fetch(requestInfost);


    const resposet = await requetet.json();

     return resposet;


};

// export {getSpecialty,getPraticien}

export {getSpecialty,getSpecialt, getPraticien, getPraticienHours,VITE_API_URL}