import React, { useState } from "react";
import "../Style/signIn.css";
import cross from "../assets/cross.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IProps {
  loginstate: Boolean;
  setloginstat: (arg: Boolean) => void;
}

function Login(props: IProps) {
  const [form, setform] = useState({ loginId: "", password: "" });
  const [errstatus, seterrstatus] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login", form).then((res: any) => {
      res = res.data;
      //   console.log(res);
      if (res.status == "200") {
        seterrstatus(res.message);
        navigate("/auth/feed");
      } else {
        seterrstatus(res.error);
      }
      setform({ loginId: "", password: "" });
    });
  }
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(form);
  };

  return (
    <div className="hide">
      <button
        onClick={() => {
          props.setloginstat(false);
        }}
        className="exit"
        style={{ width: "2%", height: "2%" }}
      >
        {" "}
        <img src={cross} alt="exit" />
      </button>
      <div className="formHeading"> Login</div>
      {/* <form method='POST' action='http://localhost:1000/auth/register' > */}
      <form onSubmit={onSubmit}>
        <div className="tagName">
          <input
            className="tagInput"
            placeholder="UserName or Email"
            type="text"
            id="loginid"
            name="loginId"
            value={form.loginId}
            onChange={handlerChange}
            required
          />
        </div>

        <div className="tagName">
          <input
            className="tagInput"
            placeholder="Password"
            type="text"
            id="password"
            name="password"
            value={form.password}
            onChange={handlerChange}
            required
          />
        </div>
        <div className="status" style={{ height: "2rem" }}>
          {errstatus}
        </div>
        {errstatus == "Login Successful" ? (
          <Link to="/auth/feed">
            <button style={{ width: "4rem", padding: "0rem" }}>Home</button>
          </Link>
        ) : null}

        <button className="submit" type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default Login;
