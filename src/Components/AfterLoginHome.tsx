import React from "react";
import LeftSideHome from "./LeftSideHome";
import MiddleHome from "./MiddleHome";
import "../Style/Twiter.css";
import RightSideHome from "./RightSideHome";
// import { useWindowSize } from "./Hooks";
import { useWindowWidth } from "@react-hook/window-size";

function AfterLoginHome() {
  //   const [width] = useWindowSize();
  const onlyWidth = useWindowWidth();
  return (
    <div className="home">
      {onlyWidth >= 700 ? (
        <>
          <LeftSideHome />
          <MiddleHome />
          <RightSideHome />
        </>
      ) : (
        <>
          <MiddleHome />
        </>
      )}
    </div>
  );
}

export default AfterLoginHome;
