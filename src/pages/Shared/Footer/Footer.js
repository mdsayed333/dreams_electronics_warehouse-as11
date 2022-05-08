import React from "react";
import {
  FaGithub,
  FaFacebookSquare,
  FaPhoneAlt,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="text-center text-md-start col-md-6 ps-md-5 pb-3">
          <h3 className="footer-title">Contact Us</h3>
          <div className="d-flex justify-content-center d-md-block">
            <div
              className="bg-danger mb-2"
              style={{ height: "2px", width: "35%" }}
            ></div>
          </div>
          <p>
            {<FaPhoneAlt className="badge-color"></FaPhoneAlt>} +88 01812343532
          </p>
          <p>
            {<HiOutlineMail className="badge-color"></HiOutlineMail>}{" "}
            mdsayedgv2@gmail.com
          </p>
          <p>
            {<HiOutlineLocationMarker className="badge-color" />} Muradpur,
            Chittagong, Bangladesh
          </p>
        </div>
        <div className="col-md-6 text-center">
          <h3 className="footer-title">Social Contact</h3>
          <div
            className="bg-danger mb-2"
            style={{ height: "2px", width: "40%", margin: "0 auto" }}
          ></div>
          <div>
            <FaGithub className="footer-icons"></FaGithub>
            <FaTwitterSquare className="footer-icons" />
            <FaFacebookSquare className="footer-icons"></FaFacebookSquare>
            <br />
            <FaInstagramSquare className="footer-icons" />
            <FaLinkedin className="footer-icons" />
          </div>
        </div>
      </div>
      <small className="d-block text-center text-danger">
        COPYRIGHT &copy; 2022 DREAMS ELECTRONICS
      </small>
    </div>
  );
};

export default Footer;
