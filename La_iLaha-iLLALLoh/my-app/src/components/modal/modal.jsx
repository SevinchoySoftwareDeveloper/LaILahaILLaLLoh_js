import { useState } from "react";
import "./modal.css";
function Modal({ children, closeModal }) {
  let [usname, getusername] = useState("");
  return (
    <>
      <div className="modal_box">
        <div className="modaled">
          {children}
          <form>
            <label>
              <input
                type="text"
                onChange={(e) => getusername(e.target.value)}
                placeholder="You are name"
                maxLength={23}
                required
              />
            </label>
            <button type="submit" className="submit">
              submit
            </button>
            <h2>You are name:{usname}</h2>
          </form>
          <button onClick={closeModal}>cloce modal</button>
        </div>
      </div>
    </>
  );
}
export default Modal;
