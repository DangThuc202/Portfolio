import React from "react";

const infos = [
  {
    title: "Summary",
    title2: "Dang Hoang Thuc",
    desc: "Innovative and results-oriented Fullstack Developer with less than 1 year of experience, specializing in Node.js, ReactJS, and modern web technologies. Passionate about coding, UI/UX design, and scalable backend solutions, with a strong focus on mastering fullstack development. Dedicated to advancing skills in frontend optimization, state management, and backend architecture, aiming to become a well-rounded and successful IT professional.",
  },
  {
    title: "Education",
    title2: "Bachelor of Engineering in Information Technology",
    time: "2020-2024",
    point: "GPA: 3.0/4.0",
    university: "Hutech University",
  },
  {
    title: "Internal Projects",
    title2: "Medical appointment booking website",
    time: "11/2024 - Present",
    info: [
      "Generated statistical data and visualized the top-performing doctor of the month through interactive charts",
      "Implemented scheduling features, enabling users to book medical appointments seamlessly",
      "Integrated multilingual support on the user interface using React-i18next for an inclusive experience",
      "Designed a calendar feature for doctors using React Big Calendar, allowing them to view appointment details and mark unavailable days efficiently",
      "Set up automated email reminders to notify users about their appointments",
      "Doctor rating permission",
    ],
  },
  {
    title: "Professional Experience",
    title2: "Software Development",
    time: "03/2024 - 11/2024",
    info: [
      "Developed UI components using modern Component Libraries for scalable and reusable design.",
      "Implemented dynamic and efficient routing for multi-page applications using React-router-dom.",
      "Utilized Redux Toolkit for efficient state management, ensuring smooth transitions for language switching and handling other global states across the application.",
      "Developed backend functionalities and business logic in practical projects using Node.js with Express.",
      "Implemented multi-language support with React-i18next, enabling seamless translation between English and Vietnamese.",
      "Managed form handling and validation effectively using React Hook Form.",
    ],
  },
];

const q =
  "text-[14px] relative pt-0 pr-0 pl-5 mt-[-2px] border-l-2 border-l-blue-300 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-blue-300 before:border-2 before:border-blue-300 mb-5";

const Resume = () => {
  return (
    <div className=" bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
      <div className="text-xl text-white/90">
        {infos.map((info, i) => (
          <>
            <div className="text-[26px] mb-5 ml-[-5px] font-semibold">
              {info.title}
            </div>
            <div className={q}>
              <div className="text-[18px] mb-1 ml-[-5px] font-normal">
                {info.title2}
              </div>

              {info.desc ? (
                <p style={{ fontStyle: "italic" }}>{info.desc}</p>
              ) : (
                <></>
              )}

              <div className="ml-5">
                {info.time ? (
                  <div className="italic my-3">{info.time}</div>
                ) : (
                  <></>
                )}
                {info.point ? <div className="mb-3">{info.point}</div> : <></>}
              </div>

              {info.university ? <div>{info.university}</div> : <></>}

              {info.info ? (
                <ul className="list-disc ml-3">
                  {info.info.map((info1, index) => (
                    <li key={index}>{info1}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Resume;
