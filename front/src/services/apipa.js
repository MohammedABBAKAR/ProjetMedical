const VITE_API_URL = import.meta.env.VITE_API_URL;

// confiqurer la requête HTTP
const  creatpatien = async(values)=> {

 // en cette ligne je veux envoyer la requête HTTP définie précédemment
    //  en utilisant la fonction fetch(). La fonction fetch() 
    //  retourne une promesse qui résoudra la réponse de la 
    //  requête lorsqu'elle sera disponible
    const requestInfos = new Request(`${VITE_API_URL}/patient/register`,{
        method: "post",
        headers: { 
            'Content-Type': 'application/json',
       
       
           },

           
           body:JSON.stringify(values),


    });
    // attend que la réponse de la requête soit disponible
    const requete = await fetch(requestInfos);
    // Une fois que la réponse de la requête est reçue, elle est extraite sous forme de données JSON
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

const deletepatien = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/patient/delete`, {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: values }),
	});
    // attend que la réponse de la requête soit disponible
	const request = await fetch(requestInfos);
    // Une fois que la réponse de la requête est reçue, elle est extraite sous forme de données JSON
	const response = await request.json();
	return response;
};


// const API_URL = "your_api_url_here"; // Replace with your actual API URL

// const deletepatien = async (values) => {
//   const requestInfos = new Request(`${API_URL}/patient/delete`, {
//     method: "delete",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id: values }),
//   });
//   const request = await fetch(requestInfos);
//   const response = await request.json();
//   return response;
// };


// const updatepatien = async (values) => {
//     const requestInfos = new Request(`${VITE_API_URL}/patient/update`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json", // Ajoutez l'en-tête JSON
//       },
//       body: JSON.stringify(values), // Convertissez les données en JSON
//     });
//     const request = await fetch(requestInfos);
//     const response = await request.json();
//     return response;
//   };
  



export {creatpatien, checkpatien,deletepatien,VITE_API_URL} 