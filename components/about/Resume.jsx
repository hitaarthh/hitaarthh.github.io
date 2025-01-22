import React from "react";

const Resume = () => {
  const resumeContent = [
    // {
    //   id: 1,
    //   colClass: "left",
    //   title: "Education",
    //   resume: [
    //     {
    //       id: 1,
    //       year: "2021 - 2025",
    //       institute: "Amrita Vishwa Vidyapeetham",
    //       degree: "Bachelor Of Technology",
    //     },
    //     {
    //       id: 2,
    //       year: "2018 - 2020",
    //       institute: "Sheiling House School",
    //       degree: "Senior Secondary School",
    //     },
    //     {
    //       id: 2,
    //       year: "2004 - 2018",
    //       institute: "Sheiling House School",
    //       degree: "High School",
    //     },
    //   ],
    // },
    {
      id: 2,
      colClass: "center",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "Dec 24 - present",
          institute: "PY Insights",
          degree: "Software Engineer",
        },
        {
          id: 2,
          year: "May 24 - Jul 24",
          institute: "SLB",
          degree: "Software Engineer Intern",
        },
        {
          id: 3,
          year: "Dec 23 - Apr 24",
          institute: "Drupal",
          degree: "Front End Developer",
        },
        {
          id: 4,
          year: "Oct 21 - Nov 23",
          institute: "Team bi0s",
          degree: "Full Stack Developer",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
