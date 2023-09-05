import "./Fotter.css";
const Fotter = () => {
  return (
    <footer className="footer">
      {/* <h2 className="footer-logo">agency</h2> */}
      <p className="footer-socials">
        <a href="#" target="_blank">
          <img src="img/facebook.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img src="img/twitter.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img src="img/instagram.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img src="img/snapchat.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img src="img/pinterest.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img src="img/youtube.png" alt="" />
        </a>
      </p>
      <p className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Support</a>
        <a href="#">Helpdesk</a>
        <a href="#">Faq</a>
      </p>
    </footer>
  );
};

export default Fotter;
