import "./Main.css";

const Main = () => {
  return (
    <div className="box">
       
      <div className="backg">
        <div className="mains">
          <h1>Rendez vous avec vos Professionnels </h1>
          <form  className="form-main">
            <input type="text" name="search" placeholder="Search..." className="FormeMain1" />
            <input type="submit" name="" value="Search" className="btn-main"  />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
