import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='footer__logo'>
        <h5>Bon Gionno</h5>
        <p>You'll come back from the dead for our pizza!</p>
        <h5 className='footer__title mb-3'>Delivery Time</h5>
        <ListGroup>
          <div className='delivery__time-item border-0 ps-0'>
            <span>Monday - Sunday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className='delivery__time-item border-0 ps-0'></div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
