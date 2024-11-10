import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Portfolio <br /> Created by
        <a
          href="https://www.linkedin.com/in/hitarth-rohra/"
          target="_blank"
          rel="noreferrer"
        >
          @hitarth
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
