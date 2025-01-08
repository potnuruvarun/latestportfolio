import "./Home.css";
export default function Home() {
  return (
    <div className="Container">
      <div className="row">
        <div className="Info">
          <p className="custom-font">Hello ,Iam Varun</p>
          <h1 className="custom-fonth">Full Stack Developer</h1>
          <a href="" className="custom-font" style={{ fontWeight: "Bold" }}>
            ContactMe
          </a>
        </div>
        <div class="card">
          <div class="card-content">
            <img href="./assets/svgs/github.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
