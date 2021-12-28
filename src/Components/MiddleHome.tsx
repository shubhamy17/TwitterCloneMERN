import React, { useEffect, useState } from "react";
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
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { AnyRecord } from "dns";
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

  const createblog = () => {
    axios
      .post(" http://localhost:3001/blogs/create-blog", {
        userId: "61ca02c1655445a177464d55",
        title: "tital is not required",
        bodyText: tweet.bodyText,
      })
      .then((res: any) => {
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
        userId: "61ca02c1655445a177464d55",
        offset: 0,
      })
      .then((res: any) => {
        console.log(res.data);
        setdata(res.data.data[0].data);
        setupdate(res.data.data[0].data._id);
      });
  }, [load, update]);

  function deleteBlog(blogId: AnyRecord, userId: AnyRecord) {
    console.log("deleteBlog");
    axios
      .post("http://localhost:3001/blogs/delete-blog", {
        blogId: blogId,
        userId: userId,
      })
      .then((data) => {
        console.log(data);
        setupdate(true);
      });
  }

  // console.log(data);
  // console.log(update);
  if (!data) return null;
  return (
    <>
      <div
        style={{
          width: "100%",
          border: "1px solid #eff3f4",
          height: "100%",
          marginLeft: "15rem",
        }}
      >
        <h1
          style={{
            margin: ".8rem 0rem",
            height: "53px",
            padding: "0rem 1.0rem",
            fontSize: "1.4rem",
            fontWeight: "650",
            borderBottom: "1px solid #eff3f4",
            color: "rgba(0, 0, 0, 0.849)",
            position: "sticky",
            top: "2",
            zIndex: "100",
            backgroundColor: "white",
          }}
        >
          Home
        </h1>
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

            <ImageIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <GifBoxIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <PollIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EmojiEmotionsIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EventAvailableIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />

            <button
              style={{
                marginLeft: "19rem",
                backgroundColor: "rgb(29, 155, 240)",
                color: "white",
                width: "6rem",
                borderRadius: "35px",
                height: "2rem",
                border: "none",
              }}
              onClick={createblog}
            >
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
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <PersonIcon style={{ fontSize: 50 }} />
                    </div>
                    <div>
                      <h6>NDTV</h6>
                      <div>{/* <h4>Title</h4> */}</div>

                      <div>
                        <h3> {data.bodyText}</h3>
                      </div>
                      <h5>(AFP News Agency)</h5>

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
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}

export default MiddleHome;
