import "./portfolio.css";
function Portfolio() {
  return (
    <>
      <div className="wreaper">
        <div className="container">
          <div className="box1">
            <h1>Welcome my Portfolio web site</h1>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="box2">
            <div className="img">
              <img src="./imgs/fon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
