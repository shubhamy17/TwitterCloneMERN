import React from 'react';
import "../Style/Twiter.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));




function RightSideHome() {
    return (
        <div style={{marginLeft:"10px",resize: "both"}}>
        <div style={{border:"2px solid #eff3f4",borderRadius:"20px",width:"21rem",position:"sticky",
        top:"0",
        zIndex:"100",
        backgroundColor:"white"}}>
        <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Twitter"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      </div>
      <div style={{border:"2px solid #eff3f4",width:"21rem",borderRadius:"10px",marginTop:"15px",padding:"8px"}}>
          <h2>What's happening</h2>
          <p>News.LIVE</p>
          <h6>Chief of Defence Staff General<br/> Bipin Rawat and 12 others die in a <br/> helicopter crash in Tamil Nadu</h6>
          <p>Trending with #BipinRawat,Chief of Defence Staff</p>
          <hr/>
          <p>News.LIVE</p>
          <h6>Chief of Defence Staff General<br/> Bipin Rawat and 12 others die in a <br/> helicopter crash in Tamil Nadu</h6>
          <p>Trending with #BipinRawat,Chief of Defence Staff</p>
          <hr/>
          <p>News.LIVE</p>
          <h6>Chief of Defence Staff General<br/> Bipin Rawat and 12 others die in a <br/> helicopter crash in Tamil Nadu</h6>
          <p>Trending with #BipinRawat,Chief of Defence Staff</p>
          <hr/>
          <p>News.LIVE</p>
          <h6>Chief of Defence Staff General<br/> Bipin Rawat and 12 others die in a <br/> helicopter crash in Tamil Nadu</h6>
          <p>Trending with #BipinRawat,Chief of Defence Staff</p>
          <hr/>

      </div>
    </div>
        
    );
}

export default RightSideHome;