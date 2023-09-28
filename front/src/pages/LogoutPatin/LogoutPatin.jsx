import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/PatientProvider";
import { useNavigate } from "react-router-dom";

function LogoutPatin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser();

    window.sessionStorage.setItem("notice", "you are logout");

    navigate("/");
  });

  return <></>;
}

export default LogoutPatin;
