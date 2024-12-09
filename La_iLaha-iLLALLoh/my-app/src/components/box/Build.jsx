import "./Build.css";
// export default 
function Build(props) {
  console.log(props);
  return (
    <>
      <div className="divboxs">{props.children}</div>
    </>
  );
}
