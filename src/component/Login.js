import react from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default class Login extends react.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
      isSucess: "",
    };
    this.onChaneHandler = this.onChaneHandler.bind(this);
  }

  onChaneHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
        
      <div className="loginbackground">
        <div className="innerlogindiv">
          <form class="loginform-start">
            <span class="logintitle">Login</span>
            <div class="input-div">
              <input
                type="text"
                class="logininputcss-user"
                name="userName"
                placeholder="Enter Username"
                value={this.state.userName}
                onChange={this.onChaneHandler}
              />
            </div>

            <div class="input-div">
              <input
                type="password"
                class="logininputcss-pass"
                name="passWord"
                placeholder="Enter Password"
                value={this.state.passWord}
                onChange={this.onChaneHandler}
              />
            </div>
            <button
              className="btnlogin"
              onClick={() =>
                this.props.loginHandler(
                  this.state.userName,
                  this.state.passWord
                )
              }
            >
              Login
            </button>
            
            <Link to="/signup" className="txt2 forgotlogin">
              SignUp
            </Link>
          </form>
        </div>
      </div>
      
    );
  }
}
