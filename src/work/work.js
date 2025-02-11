import { useEffect, useState } from "react";

export default function Work() {

  const [projects,SetProjects]=useState([{Title:'Kiosk'}]);

  return (
    <div>
      <div className="Container">
        <div className="row">
          <div className="Info">
            <h1 className="custom-fonth">work</h1>
          </div>
          <div className="divider">
            <hr style={{ color: "white" }}></hr>
          </div>
        </div>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.Title}</h2>
            <div className="row">
              <div className="card-content">
                <h1>{project.Title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
