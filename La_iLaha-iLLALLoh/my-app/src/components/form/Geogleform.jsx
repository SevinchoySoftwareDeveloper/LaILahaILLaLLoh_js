import "./Geogleform.css";
function GeogleForm({ dataB }) {
  return (
    <>
      <div className="carta">
        {dataB.map((item) => {
          return (
            <div className="Card">
              <p>{item.id}</p>
              <h1>name:{item.name}</h1>
              <h2>surname:{item.username}</h2>
              <p>sana:{item.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default GeogleForm;
