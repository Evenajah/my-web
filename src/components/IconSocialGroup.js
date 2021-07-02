import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const IconSocialGroup = () => {
  return (
    <>
      <Link
        href="https://github.com/Evenajah"
        target="_blank"
        className="link-social"
      >
        <p className="social-button">
          <IconButton className="icon-button">
            <GitHubIcon className="icon-button-style" />
          </IconButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="text-social-icon">GitHub</span>
        </p>
      </Link>
      <Link
        href="https://www.linkedin.com/in/evelastest/"
        target="_blank"
        className="link-social"
      >
        <p className="social-button">
          <IconButton className="icon-button">
            <LinkedInIcon className="icon-button-style" />
          </IconButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="text-social-icon">LinkedIn</span>
        </p>
      </Link>
      <Link
        href="https://www.facebook.com/EveInwza007/"
        target="_blank"
        className="link-social"
      >
        <p className="social-button">
          <IconButton className="icon-button">
            <FacebookIcon Sharp className="icon-button-style" />
          </IconButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="text-social-icon">Facebook</span>
        </p>
      </Link>
      <Link
        href="https://twitter.com/Boblennon41"
        target="_blank"
        className="link-social"
      >
        <p className="social-button">
          <IconButton className="icon-button">
            <TwitterIcon className="icon-button-style" />
          </IconButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="text-social-icon">Twitter</span>
        </p>
      </Link>
      <Link
        href="https://www.instagram.com/thrdlbm/"
        target="_blank"
        className="link-social"
      >
        <p className="social-button">
          <IconButton className="icon-button">
            <InstagramIcon className="icon-button-style" />
          </IconButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="text-social-icon">Instagram</span>
        </p>
      </Link>
    </>
  );
};

export default IconSocialGroup;
