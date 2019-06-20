import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/api/friends");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>LOGGING IN.....</p>;
    }
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder="username"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="password"
            onChange={this.changeHandler}
          />
          <button>Log In Please!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
