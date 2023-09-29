const  getSpecialty = async (value)=> {


    const requestInfos = new Request(`http://localhost:1000/specialty/limit/3/${value}`,{
        method: "get",
    });
    
    const requete = await fetch(requestInfos);


    const respose = await requete.json();

     return respose;


};



const  getPraticien = async ()=> {


    const requestInfost = new Request("http://localhost:1000/info",{
        method: "get",
    });
    
    const requetet = await fetch(requestInfost);


    const resposet = await requetet.json();

     return resposet;


};

// export {getSpecialty,getPraticien}

export {getSpecialty, getPraticien}