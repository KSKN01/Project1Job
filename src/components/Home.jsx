import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
  <>
  <div className='home'>
    <main>
        <h1>TechStar</h1>
        <p>Solution to Ai your problems!</p>
    </main>
  </div>

  <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        We are your one and only solution to the tech problems you face
        every day. We are leading tech company whose aim is to increase the
        problem solving ability in children.
        </p>
    </div>
  </div>

  <div className="home3" id="about">
    <div>
        <h1>Who are we?</h1>
        <p>
        At TechStar, we are trailblazers in the ever-evolving realm of technology. As a passionate team of innovators, we strive to make the world a better place through groundbreaking advancements and cutting-edge solutions. Our vision is to reshape the future by harnessing the power of technology. We believe that technology should be a force for good, empowering individuals, businesses, and communities to thrive in an interconnected world. What sets us apart is our relentless commitment to excellence. We embrace chAienges, push boundaries, and continuously chAienge the status quo. Our agile approach Aiows us to adapt swiftly to emerging trends, ensuring that we stay ahead in a dynamic and competitive landscape. With a diverse team of brilliant minds, we possess a wide range of expertise spanning software development, artificial intelligence, data analytics, cybersecurity, and more. This depth of knowledge enables us to craft tailor-made solutions that cater to the unique needs of our clients.
        </p>
    </div>
  </div>

  <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>

    <article>
      <div style={{
        animationDelay:"0.5s",
      }}>
      <AiFillGoogleCircle /><p>Google</p>
      </div>
      <div style={{
        animationDelay:"0.7s",
      }}>
      <AiFillAmazonCircle /><p>Amazon</p>
      </div>
      <div style={{
        animationDelay:"0.4s",
      }}>
      <AiFillYoutube /><p>Youtube</p>
      </div>
      <div style={{
        animationDelay:"0.2s",
      }}>
      <AiFillInstagram /><p>Instagram</p>
      </div>
    </article>
    </div>
  </div>
  </>
  );
};

export default Home
