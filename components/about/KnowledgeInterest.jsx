import Image from "next/image";
import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Technologies",
      content: [
        " Java, Python, Golang",
        " JavaScript/TypeScript , SQL",
        " React/Next JS, Angular JS",
        " Node JS, Express JS",
        " Spring Boot, RESTful API",
       ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Tools & Technologies",
      content: [
        " Git, GitHub Actions",
        " Docker, Kubernetes",
        " MongoDB, MySQL",
        " Kafka, SonarQube",
        " Azure/AWS, Unix/Linux",
      ],
    }
  ];
  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <Image
                      width={10}
                      height={10}
                      className="svg"
                      src="/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
