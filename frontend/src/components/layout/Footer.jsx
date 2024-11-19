import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Context } from "../../main";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            This blog, built using the MERN stack (MongoDB, Express.js, React,
            and Node.js), offers a seamless, dynamic experience. It covers tech,
            development, and more, with personalized content.
          </p>
          <p>
            <span>Email:</span>shikharsinha117
            <br />
            @gmail.com
          </p>
          <p>
            <span>Name:</span>Shikhar Sinha
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          AURORA <span>BLOG</span>
        </div>
        <div className="links">
          <Link
            to={
              "https://www.instagram.com/shikharsinha154?igsh=NHZnNWdxMDR3dGdp"
            }
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/Shikhar1504"} target="_blank">
            <AiFillGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/shikhar-sinha-b14299249/"}
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
