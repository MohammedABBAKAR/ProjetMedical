import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContextt } from "../../providers/PraticienProvider";

function LogoutPratient() {

  const { userP, setUserP } = useContext(UserContextt);
  const navigate = useNavigate();

  useEffect(() => {
    setUserP();

    window.sessionStorage.setItem("notice", "you are logout");

    navigate("/");
  });

  return <></>;
}

export default LogoutPratient;
