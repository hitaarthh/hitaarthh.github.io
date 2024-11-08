import React from "react";

const Intro = () => {
  const introContent = {
    name: "Hitarth Anand Rohra",
    designation: "Student of Bits and Bytes",
    text: (
      <>
        <p>
        Hello, I’m Hitarth! I’m currently in my final year of Electronics and Computer Engineering at Amrita Vishwa Vidyapeetham, Kerala. I enjoy building software, solving problems, and exploring various technologies.
        </p>
        <p>
        Outside of coding, I love playing the guitar, improving my typing skills, and dabbling in ambidextrous activities. I also have a passion for filmography, photography, and gaming. Games like Call of Duty, Clash of Clans, and Minecraft are some of my favorites, as they offer a mix of strategy and creativity.
        </p>
        <p>
        I believe that learning is a lifelong journey, whether through engineering or other creative pursuits. I’m always keen to contribute to projects that make a positive impact and collaborate with like-minded individuals.
        </p>
        <p>Feel free to check out my resume below to know more about my journey so far.</p>
      </>
    ),
  };

  return (
    <>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
