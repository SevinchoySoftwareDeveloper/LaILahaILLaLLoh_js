import { useState } from "react";
import Modal from "../modal/modal";
import "./App.css";
import GeogleForm from "../form/Geogleform";

function App() {
  const [showmodal, setmodal] = useState(false);

  function openModal() {
    setmodal(true);
  }
  function closeModal() {
    setmodal(false);
  }

  let [count, setcount] = useState(1);
  function id(count) {
    setcount(count++);
  }
  let [username, setusername] = useState("Karimova");
  let [name, setname] = useState("Sevinch");
  let [date, setdata] = useState("6 30 2006 ");
  function Reset() {
    setusername("");
    setname("");
    setdata("");
  }

  const [event, setevent] = useState([]);
  const addInfo = (event) => {
    // console.log(event);
    setevent((prev) => {
      return [...prev, event];
    });
  };

  // console.log(addInfo);
  function handleSubmit(e) {
    e.preventDefault();
    const Newinform = {
      id: id(count),
      name: name,
      username: username,
      date: date,
    };

    addInfo(Newinform);
    Reset();
  }

  return (
    <>
      <div className="geogle_form">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
            />
            <input
              type="text"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              value={username}
              name="surname"
              className="surname"
            />
            <input
              type="date"
              onChange={(e) => {
                setdata(e.target.value);
              }}
              value={date}
              name="date"
              className="date"
            />
          </label>

          <button>submit</button>
        </form>
      </div>
      <GeogleForm dataB={event}></GeogleForm>
      <button onClick={openModal}>open Modal</button>
      {showmodal && (
        <Modal closeModal={closeModal}>
          <h1>Hello world</h1>
        </Modal>
      )}
    </>
  );
}

export default App;
