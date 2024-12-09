import "./Component.css";
import { Component } from "react";
class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  oshir = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };
  kamaytirish = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  render() {
    return (
      <>
        <div className="box">
          <h3>{this.State.number}</h3>
          <button onClick={this.oshir}></button>
          <button onClick={this.kamaytirish}></button>
        </div>
      </>
    );
  }
}
export default ClassCounter;
