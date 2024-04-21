import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import Skill from "../UI/Skill";
import SmallHeading from "../UI/SmallHeading";
import { colors } from "../../style";

export default function Specializing(props) {
  const skills = [
    {
      skillName: "HTML",
      desc: "Hands on Experience in HTML5",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "CSS",
      desc: "Having a Command on CSS3",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "JavaScript",
      desc: "Good Knowledge of JavaScript",
      value: 75,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "ReactJS",
      desc: "Worked on ReactJS + Redux",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "NodeJS",
      desc: "Learning everyday new in Node",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Bootstrap",
      desc: "Worked on React-Bootstrap",
      value: 65,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "MongoDB",
      desc: "Good Exposure on MongoDB",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "TypeORM",
      desc: "Getting a grasp on TypeORM",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];

  return (
    <div id="about" className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div data-aos="fade-up" className="flexRow wrap justify-sb">
          {skills.map((skill, index) => (
            <Skill
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={skill.textColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
