import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      progress: [
        {
          id: 1,
          skillName: "Java",
          skillValue: "85",
        },
        {
          id: 2,
          skillName: "Python",
          skillValue: "70",
        },
        {
          id: 3,
          skillName: "JavaScript",
          skillValue: "85",
        },
        {
          id: 3,
          skillName: "TypeScript",
          skillValue: "85",
        },
        {
          id: 3,
          skillName: "SQL",
          skillValue: "85",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Technologies & Tools",
      progress: [
        {
          id: 1,
          skillName: "AngularJS",
          skillValue: "75",
        },
        {
          id: 2,
          skillName: "React",
          skillValue: "80",
        },
        {
          id: 3,
          skillName: "NodeJS",
          skillValue: "85",
        },
        {
          id: 3,
          skillName: "Apache Kafka",
          skillValue: "75",
        },
        {
          id: 3,
          skillName: "NodeJS",
          skillValue: "85",
        },
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
