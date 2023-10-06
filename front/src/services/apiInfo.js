const VITE_API_URL = import.meta.env.VITE_API_URL;



const createUser = async (values) => {
  const requestInfos = new Request(`${VITE_API_URL}/info/register`, {
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


const checkUser = async (values) => {
  const requestInfos = new Request(`${VITE_API_URL}/info/login`, {
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

export { createUser, checkUser,VITE_API_URL };
