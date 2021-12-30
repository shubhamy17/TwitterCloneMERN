import React, { useState } from "react";
import "../Style/signIn.css";
import cross from "../assets/cross.jpg";
import axios, { AxiosResponse } from "axios";

const defaultState = {
  username: "",
  name: "",
  password: "",
  phonenumber: "",
  email: "",
};

interface IPost {
  message: string;
  error: string;
}
interface IProps {
  registerstate: Boolean;
  setregisterState: (arg: Boolean) => void;
  loginstate: Boolean;
  setloginstat: (arg: Boolean) => void;
}

// const defaultPosts:IPost[] = [];
function SingIn(props: IProps) {
  const [form, setform] = useState(defaultState);
  const [errstatus, seterrstatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", form)
      .then((res: AxiosResponse) => {
        const value = res.data;
        //  console.log(res);
        if (res.status === 200) {
          seterrstatus(value.message);
          props.setregisterState(false);
          props.setloginstat(true);
        } else {
          seterrstatus(value.error);
        }
        setform(defaultState);
        //  console.log(form)
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
          props.setregisterState(false);
        }}
        className="exit"
        style={{ width: "2%", height: "2%" }}
      >
        <img src={cross} alt="exit" />
      </button>
      <div className="formHeading"> Create your account</div>
      {/* method='POST' action='http://localhost:3001/auth/register' */}
      <form onSubmit={onSubmit}>
        <div className="tagName">
          <input
            className="tagInput"
            placeholder="User Name"
            type="text"
            id="username"
            name="username"
            value={form.username}
            required
            onChange={handlerChange}
          />
        </div>

        <div className="tagName">
          <input
            className="tagInput"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handlerChange}
            required
          />
        </div>

        <div className="tagName">
          <input
            className="tagInput"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handlerChange}
            required
          />
        </div>

        <div className="tagName">
          <input
            className="tagInput"
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handlerChange}
            required
          />
        </div>

        <div className="tagName">
          <input
            className="tagInput"
            type="text"
            placeholder="Phone Number"
            id="phonenumber"
            name="phonenumber"
            value={form.phonenumber}
            onChange={handlerChange}
          />
        </div>
        <div className="status" style={{ height: "2rem" }}>
          {errstatus}
        </div>
        <button className="submit" type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default SingIn;
