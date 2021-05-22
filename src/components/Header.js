import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import React from "react";
import useStyles from "../style/style";
import ImageAvatar from "./ImageAvatar";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item lg={3}>
        <ImageAvatar />
      </Grid>
      <Grid item lg={6}>
        <div className={classes.headerText}>Tharadol Boonma</div>
        <div className={classes.detailText}>Programmer At CDG Systems</div>
      </Grid>
      <Grid item lg={3} xs={12} style={{ textAlign: "right" }}>
        <Link
          href="https://page.line.me/?accountId=013hrele&openerPlatform=native&openerKey=qrcod"
          target="_blank"
          className="link-social"
        >
          <p>
            <Button
              className="line-button button-header"
              startIcon={<TagFacesIcon style={{ fontSize: 30 }} />}
            >
              Line Chat Bot
            </Button>
          </p>
        </Link>
        <p>
          <Link
            href="https://docs.google.com/uc?export=download&id=12roT-s3TKKKbsD3DIli86dNXSiqbThyy"
            target="_blank"
            className="link-social"
          >
            <Button
              className="resume-button button-header"
              startIcon={<AssignmentIndIcon style={{ fontSize: 30 }} />}
            >
              Download Resume
            </Button>
          </Link>
        </p>
      </Grid>
    </>
  );
};

export default Header;
