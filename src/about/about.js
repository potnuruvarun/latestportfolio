import { useEffect } from "react";
import "./about.css";
import { useState } from "react";
export default function About() {
  const technology = [
    {
      name: "C#",
      yearsOfExperience: "2 years",
    },
    {
      name: "JavaScript",
      yearsOfExperience: "2 years",
    },
    {
      name: "React",
      yearsOfExperience: "1 year",
    },
    {
      name: "Angular",
      yearsOfExperience: "2 year",
    },
    {
      name: ".Net Core",
      yearsOfExperience: "2 years",
    },
  ];

  const [techElements, setTechElements] = useState(technology);

  useEffect(() => {
    setTechElements(technology);
    console.log(techElements);
  }, []);

  return (
    <div className="Container">
      <div className="row">
        <div className="Info">
          <h1 className="custom-fonth">aboutMe</h1>
        </div>
        <div className="divider">
          <hr style={{ color: "white" }}></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={{ width: "50%" }}></div>
        <div className="custom-font">
          <p style={{ textAlign: "left" }}>
            Amelia Earhart (August 15, 1928 – April 22, 2012) was an American
            actress, singer, and songwriter. She was born in New York City and
            raised in Detroit. Her career spanned five decades and has been
            widely recognized for her role as the mother of five children.
          </p>
        </div>
      </div>
      <div className="coontainer">
        <div className="row">
          {/* <div className="col-md-6" style={{ width: "50%" }}> */}
          {techElements.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="custom-heading">{item.name}</h2>
                <p className="custom-font" style={{ fontSize: "small",textDecoration:"underline" }}>
                  {item.yearsOfExperience}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
