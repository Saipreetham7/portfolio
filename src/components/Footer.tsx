import React from 'react';
import '../assets/styles/Footer.scss';
import { GitHub, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <div>
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
      </div>
      <p>
        A portfolio designed & built by{' '}
        <a
          href="https://github.com/Saipreetham7/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Sri Sai Preetham Poola
        </a>{' '}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
