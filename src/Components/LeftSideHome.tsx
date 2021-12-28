import React from 'react';
import logo from "../assets/icon.png";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../Style/Twiter.css";

function LeftSideHome() {
    return (
        <div className='leftsideMain'>
           
        <img  className="leftsideLogo"src={logo} alt="Twiter" />
      <div className="leftsideHeading"><HomeIcon className='leftsideicons'/>Home</div>
      <div className="leftsideHeading"><TagIcon  className='leftsideicons' />Explore</div>
      <div className="leftsideHeading"><NotificationsActiveIcon  className='leftsideicons'/>Notifications</div>
      <div className="leftsideHeading"><MailIcon  className='leftsideicons'/>Messages</div>
      <div className="leftsideHeading"><BookmarkIcon  className='leftsideicons'/>Bookmarks</div>
      <div className="leftsideHeading"><ListAltIcon  className='leftsideicons'/>Lists</div>
      <div className="leftsideHeading"><PersonIcon  className='leftsideicons'/>Profile</div>
      <div className="leftsideHeading"><MoreHorizIcon  className='leftsideicons'/>More</div>
    <button className='btn'>Tweet</button>
    </div>
    );
}

export default LeftSideHome;