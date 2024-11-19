import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Hey there! I'm Shikhar Sinha, a student at Bangalore Institute of
          Technology, and I'm excited to share my journey of creating this blog
          website. Built using the MERN stack (MongoDB, Express.js, React, and
          Node.js), this website is designed to provide a seamless experience
          for both authors and readers
        </p>
        <p>
          The website offers two types of users: authors and readers. Authors
          can create, update, and delete their blogs, as well as view blogs from
          other authors. On the other hand, readers can enjoy reading blogs
          created by others, without the ability to create or modify content.
        </p>
        <p>
          The homepage showcases trending blogs, the latest blogs, and popular
          authors, making it easy for users to discover new content. There are
          links available to view all blogs and explore all authors. Each author
          has a personalized dashboard where they can manage their blogs —
          creating new posts, updating or deleting existing ones, and tracking
          blog statistics through a chart that shows the number of blogs
          published or not. Authors can also view and update their profile from
          the dashboard.
        </p>
        <p>
          The website also includes a dark and light mode, allowing users to
          switch between themes based on their preferences. Additionally, there
          are six categories of blogs available: Lifestyle, Technology, Sports,
          Travel, Business, and Economy, making it easy for everyone to find
          content that interests them.
        </p>
        <p>
          It's been an exciting project, and I’m looking forward to seeing how
          users interact with the platform!
        </p>
        <h2>Connect with Me</h2>
        <p>
          Stay connected and keep up with my latest projects, blog updates, and
          tech adventures! Feel free to reach out through any of the following
          platforms:
        </p>
        <div className="linkss">
          <Link
            to={"https://www.linkedin.com/in/shikhar-sinha-b14299249/"}
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
          <Link to={"https://github.com/Shikhar1504"} target="_blank">
            <AiFillGithub />
          </Link>
          <Link
            to={
              "https://www.instagram.com/shikharsinha154?igsh=NHZnNWdxMDR3dGdp"
            }
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
        </div>
        <p>
          I'm always open to feedback, collaborations, and just connecting with
          fellow tech enthusiasts. Feel free to drop me a message or connect via
          social media — I’d love to hear from you!
        </p>
      </div>
    </article>
  );
};

export default About;
