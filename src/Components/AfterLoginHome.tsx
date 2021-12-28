import React from 'react';
import LeftSideHome from './LeftSideHome';
import MiddleHome from './MiddleHome';
import "../Style/Twiter.css";
import RightSideHome from './RightSideHome';

function AfterLoginHome() {
    return (
        <div className='home'>
           
            <LeftSideHome/>
            <MiddleHome/>
            <RightSideHome/>
            
        </div>
    );
}

export default AfterLoginHome;