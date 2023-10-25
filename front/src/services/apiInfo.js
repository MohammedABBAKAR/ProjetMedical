const VITE_API_URL = import.meta.env.VITE_API_URL;



const createUser = async (values) => {
  const requestInfos = new Request(`${VITE_API_URL}/info/register`, {
    // envoyer des données au serveur pour créer user avec la méthode HTTP à utiliser est POST,
    method: "post",

    // en-têtes de la requête  le contenu envoyé sera au format JSON
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(values),
  });
  // envoie la requête HTTP configurée précédemment en utilisant la fonction fetch(). 
  const requete = await fetch(requestInfos);
  // Une fois que la réponse de la requête est reçue, elle est
  //  extraite au format JSON en utilisant la méthode json() de la réponse
  const respose = await requete.json();

  return respose;
};


const checkUser = async (values) => {
  const requestInfos = new Request(`${VITE_API_URL}/praticien/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(values),
  });
  const requete = await fetch(requestInfos);
  const respose = await requete.json();

  return respose;
};


const createSpes = async (values) => {
  const requestInfos = new Request(`${VITE_API_URL}/info/into`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(values),
  });

  const requete = await fetch(requestInfos);
  const respose = await requete.json();

  return respose;
};



const deletpraticien = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/info/deletepr`, {
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




export { createUser, checkUser,createSpes,deletpraticien,VITE_API_URL };
