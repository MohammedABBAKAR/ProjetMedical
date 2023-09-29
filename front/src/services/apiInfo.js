const createUser = async (values) => {
  const requestInfos = new Request("http://localhost:1000/info/register", {
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
  const requestInfos = new Request("http://localhost:1000/info/login", {
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

export { createUser, checkUser };
