import React from 'react';
import "../styles/home.scss";
import vg from "../assets/vg.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are a leading tech company whose aim is to increase
            the problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates consectetur sunt itaque rerum, eum numquam animi ad, rem
            esse natus voluptas porro eius, laborum necessitatibus voluptatem
            aliquid exercitationem veniam libero repudiandae. Hic dolorum
            omnis, assumenda quas odio sunt corrupti non accusantium deleniti
            velit nam est quam sequi voluptates, blanditiis iste ad ducimus
            magni earum, rem ipsum ratione delectus aspernatur aut! Quisquam,
            tenetur dolores deserunt ratione debitis molestias earum odio fugit
            ex assumenda optio porro dolore. Voluptatem ipsum magni, commodi
            vitae inventore nisi nemo pariatur earum vel repudiandae soluta est
            eligendi.
          </p>
        </div>
      </div>

      <div className="home4" id= "brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
