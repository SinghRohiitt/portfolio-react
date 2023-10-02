import React from "react";
import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import me from "../assets/me.jpeg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="me"
        />

        <h2>Rohit Singh</h2>
        <p>Starting my journey as a Developer.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/rohit_sayys" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/rohit-singh-353356284" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/SinghRohiitt" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;