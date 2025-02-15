import styles from "../Styles/landing.module.css";
import Logo from '../../src/Images/Skybus.svg.png';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className={styles.brandName}>
          <img  src={Logo} alt="logo" height={"48px"}/>

            </h3>
            <p className={styles.footerDesc}>
              Your trusted travel partner for seamless and comfortable journeys. Experience the best in class travel with us.
            </p>
          </div>
          <div className="col-md-2">
            <h4>Services</h4>
            <ul className={styles.footerList}>
              <li>Bus Ticket</li>
              <li>Bus Hire</li>
              <li>Tempo Travellers</li>
              <li>Car Rentals</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Company</h4>
            <ul className={styles.footerList}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Support</h4>
            <ul className={styles.footerList}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Follow Us</h4>
            <ul className={styles.footerList}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className={styles.companyinfo}>
            &copy; 2025 SkyBus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
