import React from "react";
import Myself from "./Myself";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("yes"); // api calling
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <Myself name={"Rishi"} />
        <p>{name}</p>
        <p>Front End Developer</p>
        <h4>Count : {this.state.count} (Go upto 1 - 10)</h4>
        <button
          onClick={() => {
            this.state.count >= 10 ? (
              <></>
            ) : (
              this.setState({
                count: this.state.count + 1,
              })
            );
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            this.state.count <= 1 ? (
              <></>
            ) : (
              this.setState({
                count: this.state.count - 1,
              })
            );
          }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default About;
