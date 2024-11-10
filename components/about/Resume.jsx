import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2021 - 2025",
          institute: "Amrita Vishwa Vidyapeetham",
          degree: "Bachelor Degree",
        },
        {
          id: 2,
          year: "2018 - 2020",
          institute: "Sheiling House School",
          degree: "Higher Secondary School",
        },
        {
          id: 2,
          year: "2004 - 2018",
          institute: "Sheiling House School",
          degree: "High School",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 2,
          year: "May 2024 - July 2024",
          institute: "SLB",
          degree: "Software Engineer Intern",
        },
        {
          id: 3,
          year: "Dec 2023 - April 2024",
          institute: "Drupal",
          degree: "Open Source Developer",
        },
        {
          id: 4,
          year: "Oct 2021 - Nov 2023",
          institute: "Team bi0s",
          degree: "Student Researcher",
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
