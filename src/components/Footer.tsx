import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Health Calculator. All rights
          reserved.
        </p>
        <div className="social-icons mt-2">
          <a
            href="https://facebook.com"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-2">
          <a href="/privacy-policy" className="text-decoration-none">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="text-decoration-none">
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
