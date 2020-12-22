import React from "react";

const Footer = () => (
  <footer className="pt-5">
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            <a
              href=""
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Privacy Policy
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href=""
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Terms & Conditions
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href=""
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Help
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
            <a
              href="https://atelierleyla.ca/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              &copy; {new Date().getFullYear()} Atelier Leyla Inc
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
