import Navbar from "../../components/Navbar";
import "./OublieMot.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


const OublieMot = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    const watcher = watch((observer) => console.log(observer));
    return () => watcher.unsubscribe();
  }, [watch]);

  const submitForm = (values) => console.log(values);



  return <div>

    <div className="password">
      <form action="" className="mot-pass" onSubmit={handleSubmit(submitForm)}>
<p><input
            type="email"
            name="mail"
            placeholder="Email"
            id=""
            className="Forme-mot"
            {...register("Email", {
              required: "Email Address is required",
            })}
          />
          <span className="tob">{errors.Email?.message}</span></p>
<p>
<input
            type="submit"
            value="Envoyer"
            className="btn-mot"
          />
</p>
      </form>
    </div>
  </div>;
};

export default OublieMot;
