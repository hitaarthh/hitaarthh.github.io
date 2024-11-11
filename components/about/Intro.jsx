import React from "react";

const Intro = () => {
  const introContent = {
    name: "Hitarth Anand Rohra",
    designation: "Student of Bits and Bytes",
    text: (
      <>
        <p>
          Hello, I’m Hitarth! Originally from Kanpur, Uttar Pradesh, I’m currently in my final year of Electronics and Computer Engineering at Amrita Vishwa Vidyapeetham in Kerala. I enjoy building software, solving complex problems, and exploring various technologies.
        </p>
        <p>
          Capturing moments through photography has become a way to explore the world from different perspectives. I enjoy experimenting with various techniques, discovering new ways to tell stories through the lens, and finding beauty in unexpected details.
        </p>
        <p>
          Reflecting on my journey through writing has become a meaningful way to connect with others. I love traveling across India, discovering new places, and experiencing diverse cultures. Each trip brings fresh perspectives that I capture in my blog—feel free to explore it to learn more about my travels and reflections.
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
