import React from "react";

class Myself extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "nachatra-sharma",
      userInfo: [],
      userSearch: "nachatra-sharma",
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/" + this.state.username
    );
    const result = await data.json();
    this.setState({
      userInfo: result,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.userSearch !== prevState.userSearch) {
    //   this.componentDidUpdate();
    // }

    console.log("component updated");
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.state.userInfo.avatar_url} alt='' />
        <p>Name: {this.state.userInfo.name}</p>
        <input
          type='text'
          value={this.state.userSearch}
          onChange={(e) => {
            this.setState({
              userSearch: e.target.value,
            });
          }}
          name='github-user-info'
          id='github-user-info'
        />
        <button
          type='submit'
          onClick={() => {
            // this.setState({
            //   username: this.state.userSearch,
            // });
            console.log(this.state.username);
          }}>
          Submit
        </button>
      </div>
    );
  }
}

export default Myself;
