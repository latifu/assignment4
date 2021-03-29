import { useContent } from "react";
import "./SignIn.css";
import NavBar from "../components/NavBar";

const SignIn = () => {
  return (
    <div class="formContainer">
      <form className="signin">
        <input type="text" className="username" placeholder="  Username" />

        <input type="password" className="password" placeholder="  Password" />

        <input type="submit" value="Sign In" className="button" alt="" />

        <div className="chkbox">
          <input type="checkbox" value="Remember me" className="checkbox" />
          Remember me
        </div>

        <label>Forgotten Password?</label>

        <input email="email" className="email" placeholder="  Enter email:" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default SignIn;
