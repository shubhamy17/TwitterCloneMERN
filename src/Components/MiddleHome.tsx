import React, { useEffect, useState } from "react";
import "../Style/MiddleHome.css";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import DeleteIcon from "@mui/icons-material/Delete";
import axios, { AxiosResponse } from "axios";

interface IBlogs {
  userId: string;
  title: string;
  bodyText: string;
  tweet: string;
}

function MiddleHome() {
  const [blog, setBlog] = useState<IBlogs>();
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [tweet, settweet] = useState({ bodyText: "" });
  const [update, setupdate] = useState(false);
  const [username, setusername] = useState<string>("");

  // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   axios.post("http://localhost:3001/auth/login").then((res: any) => {
  //     const value = res.data;
  //     console.log(value);
  //     setusername(value.data.username);
  //   });
  // }
  // console.log(username);

  const createblog = () => {
    axios
      .post(" http://localhost:3001/blogs/create-blog", {
        userId: localStorage.getItem("userId"),
        title: "tital is not required",
        bodyText: tweet.bodyText,
      })
      .then((res: AxiosResponse) => {
        console.log(res);
        // settweet(res.data.bodyText);
        setBlog(res.data);
        setload(true);
        settweet({ bodyText: "" });
      });

    // settweet(res.data.bodyText),
  };
  // console.log(tweet);
  const tweetdata = (e: React.ChangeEvent<HTMLInputElement>) => {
    settweet({
      ...tweet,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/blogs/my-blogs", {
        userId: localStorage.getItem("userId"),
        offset: 0,
      })
      .then((res: AxiosResponse) => {
        console.log(res.data);
        setdata(res.data.data[0].data);
        setupdate(res.data.data[0].data._id);
      });
  }, [load, update]);

  function deleteBlog(blogId: string, userId: string) {
    console.log("deleteBlog");
    axios
      .post("http://localhost:3001/blogs/delete-blog", {
        blogId: blogId,
        userId: userId,
      })
      .then((data: any) => {
        console.log(data);
        setupdate(true);
      });
  }

  // console.log(data);
  // console.log(update);
  if (!data) return null;
  return (
    <>
      <div className="middleMain">
        <h1 className="homeH1">Home</h1>
        <div style={{ display: "flex", color: "rgb(29, 155, 240)" }}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="text"
              placeholder="What's happening?"
              style={{ border: "none" }}
              name="bodyText"
              id="bodyText"
              value={tweet.bodyText}
              onChange={tweetdata}
            />

            <h6 style={{ color: "rgb(29, 155, 240)" }}>
              <PublicIcon />
              Everyone can reply
            </h6>
            <hr />

            <ImageIcon className="icons" />
            <GifBoxIcon className="icons" />
            <PollIcon className="icons" />
            <EmojiEmotionsIcon className="icons" />
            <EventAvailableIcon className="icons" />

            <button className="tweetbtn" onClick={createblog}>
              Tweet
            </button>
          </div>
        </div>
        <hr />
        <h6 style={{ textAlign: "center" }}> Show 27 Tweet</h6>
        <hr />
        {data.map((data: any) => {
          return (
            <>
              {setBlog != null ? (
                <>
                  <div style={{}}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <PersonIcon style={{ fontSize: 50 }} />
                      <h6>@shubhamy12</h6>
                    </div>
                    <div>
                      <div style={{ marginLeft: "5rem" }}>
                        <div>
                          <h3> {data.bodyText}</h3>
                        </div>
                        <h5>(AFP News Agency)</h5>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <ChatBubbleOutlineIcon />
                        <KeyboardReturnIcon />
                        <FavoriteBorderIcon />
                        <IosShareIcon />
                        <div>
                          <DeleteIcon
                            onClick={() => deleteBlog(data._id, data.userId)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}

export default MiddleHome;
