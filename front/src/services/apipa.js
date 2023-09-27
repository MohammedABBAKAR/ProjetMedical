const  creatpatien = async(values)=> {


    const requestInfos = new Request("http://localhost:1000/patient/register",{
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

    const requestInfos = new Request("http://localhost:1000/patient/login",{

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




export {creatpatien, checkpatien} 