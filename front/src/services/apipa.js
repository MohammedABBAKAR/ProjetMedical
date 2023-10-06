const VITE_API_URL = import.meta.env.VITE_API_URL;


const  creatpatien = async(values)=> {


    const requestInfos = new Request(`${VITE_API_URL}/patient/register`,{
        method: "post",
        headers: { 
            'Content-Type': 'application/json',
       
       
           },

           
           body:JSON.stringify(values),


    });
    
    const requete = await fetch(requestInfos);
    const respose = await requete.json();

     return respose;


};








const checkpatien = async(values)=>{

    const requestInfos = new Request(`${VITE_API_URL}/patient/login`,{

    method: "post",
    headers: {
     'Content-Type': 'application/json',


    },

    body:JSON.stringify(values),


    });
    const requete = await fetch(requestInfos);
    const  respose = await requete.json();

    return  respose



}




export {creatpatien, checkpatien,VITE_API_URL} 