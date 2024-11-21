import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/hitarth-rohra/",
  },
  { iconName: "twitter", link: "https://twitter.com/hitaarthh" },
  {
    iconName: "github",
    link: "https://github.com/hitaarthh",
  },
  { iconName: "leetcode", link: "https://leetcode.com/u/hitaarthh/" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/throughmylenscape/",
  },
];
const Social = () => {
  return (
    <ul className="social">
      {/* Resume button first */}
      <li>
        <a href="/img/Hitarth_RESUME.pdf" target="_blank" rel="noreferrer" className="resume-link">
          Resume
        </a>
      </li>

      {/* Divider */}
      <li className="divider">|</li>

      {/* Existing social icons */}
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={`${val.link}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/img/svg/social/${val.iconName}.svg`}
              alt="social"
            ></img>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
