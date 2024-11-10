import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "02.10.2001",
        },
        {
          id: 2,
          name: "Age",
          content: "21",
        },
        {
          id: 3,
          name: "Address",
          content: "Kollam, Kerala, India",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:hitarth.rohra@gmail.com">hitarth.rohra@gmail.com</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "India",
        },
        {
          id: 2,
          name: "Study",
          content: "Amrita Vishwa Vidyapeetham, Kerala",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelor Of Technology",
        },
        {
          id: 4,
          name: "Interest",
          content: "Photography, Football, Writing & Blogging",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
