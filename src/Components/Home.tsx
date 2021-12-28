import React,{useState} from "react";
import "../Style/home.css";
import Twiter from "../assets/data.jpg";
import logo from "../assets/icon.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.png";
import SingIn from "./SignIn";
import Login from "./Login";
interface IStates {
  registerstate:{
  registerstate:boolean;
  }[]
  loginState:{
    loginstate:boolean;
  }[]
  
}
// const defaultPosts:states[] = [];
function Home() {
  const [registerstate, setregisterState] = useState<Boolean>(false);
  const [loginstate,setloginstat]=useState<Boolean>(false);
  // const [loginstate, setloginstate]: [states[], (states: states[]) => void] = React.useState(defaultPosts);
  // const [registerstate, setregisterstate]: [states[], (states: states[]) => void] = React.useState(defaultPosts);
  return (
    <div className="homepage">
    <div className="frontpage">
          {registerstate}
      <img className="twiterlogo" src={Twiter} alt="Twiter" />
      <div className="Rightside">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1 className="now">Happening now</h1>
        <h4 className="join">Join Twitter today.</h4>
        <div className="rightsidebtn">
          <button className="googleSignBtn">
            <img className="btnimg" src={google} alt="google" />
            Sign up with Google
          </button>
          <button className="applySignBtn">
            <img className="btnimg" src={apple} alt="apple" />
            Sign up with Apple
          </button>
        </div>
        <hr />
        <div>
          <button onClick={()=>{setregisterState(true)}} className="singupBtn">Sign up with phone or email</button>
          <p className="terms">
            By signing up,you agree to the Terms of Service and Privacy
            <br /> Policy,including Cookie Use.
          </p>
        </div>
        <h5 style={{ marginTop: "5rem" }}>Already have an account?</h5>
        <button  className="singInbtn" onClick={()=>{setloginstat(true)}}>Sign in</button>
      </div>
   
    </div>
    {registerstate?(<SingIn  loginstate={loginstate} registerstate={registerstate} setregisterState={setregisterState}  setloginstat={setloginstat} />):(null)}
      {loginstate?(<Login loginstate={loginstate}  setloginstat={setloginstat} />):(null)}
    
    </div>
  );
}

export default Home;
