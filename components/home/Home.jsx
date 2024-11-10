"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content mobile-center">
          <div className="avatar mobile-full">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpeg)",
              }}
            ></div>
          </div>
          <div className="details mobile-full">
            <h3 className="name">Hitarth Anand Rohra</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Student",
                  "Writer",
                  "Photographer",
                  "Storyteller",
                  "General Enthusiast",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
            Creative soul based in Kollam, happy to travel, explore, and capture stories from every corner of life.
            </p>
                        <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;