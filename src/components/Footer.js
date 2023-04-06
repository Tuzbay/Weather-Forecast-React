import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <strong>~ Tunay Uzbay YELCE ~</strong>
      <div className="footer__bottom">
        <a
          href="https://www.linkedin.com/in/tunayuzbayyelce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>

        <a
          href="https://github.com/Tuzbay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
