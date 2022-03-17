import React from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png'

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="ruinHighlight">
          <div className="ruinContainer">
            <img className="selectedRuin" src="https://lh3.googleusercontent.com/xlIJqi3d7FSwqVgBRLskEfvb0HLlmTOLNUInSQYJFv_wAvhLhfW-X79GeKnINGT8u1ypVa5AICDptFl7HfOFj9fb-VQxcTzu3wE76w" alt="" />
          </div>
        </div>
        <div className="ruinDetails" style={ {color: '#fff'}}>
          <div className="title">Gray</div>
          <span className="itemNumber">#6</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src="https://lh3.googleusercontent.com/xlIJqi3d7FSwqVgBRLskEfvb0HLlmTOLNUInSQYJFv_wAvhLhfW-X79GeKnINGT8u1ypVa5AICDptFl7HfOFj9fb-VQxcTzu3wE76w" alt=""/>
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle"></div>
            <div>0x3B4D41403b70f9A6a9DadE6A89FB61c9f1c1b0CA</div>
            <div className="ownerHandle">@leo_lemus_10</div>
            <div className="ownerLink">
              <img src={instagramLogo} alt=""/>
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt=""/>
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
