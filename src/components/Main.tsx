import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myPhoto from '../assets/images/myphoto2.jpeg';
// import myPhoto from '../assets/images/my-avatar.png';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Saipreetham7"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/preetham1809/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="mailto:saipreetham3022@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </a>
          </div>
          <h1>Sri Sai Preetham Poola</h1>
          <p>Full Stack Engineer | DevOps</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Saipreetham7"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/preetham1809/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="mailto:saipreetham3022@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
