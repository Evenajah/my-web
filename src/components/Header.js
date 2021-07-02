import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import useStyles from "../style/style";
import ImageAvatar from "./ImageAvatar";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const socialGroup = [
    {
      name: "GitHub",
      icon: <GitHubIcon className="icon-button-style" />,
      link: "https://github.com/Evenajah",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className="icon-button-style" />,
      link: "https://www.linkedin.com/in/evelastest/",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon Sharp className="icon-button-style" />,
      link: "https://www.facebook.com/EveInwza007/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon className="icon-button-style" />,
      link: "https://twitter.com/Boblennon41",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="icon-button-style" />,
      link: "https://www.instagram.com/thrdlbm/",
    },
  ];

  const projectGroup = [
    {
      name: "Download Resume",
      icon: <AssignmentIndIcon className="icon-button-style" />,
      link: "https://docs.google.com/uc?export=download&id=12roT-s3TKKKbsD3DIli86dNXSiqbThyy",
    },
    {
      name: "Line Chatbot",
      icon: <TagFacesIcon className="icon-button-style" />,
      link: "https://page.line.me/?accountId=013hrele&openerPlatform=native&openerKey=qrcod",
    },
  ];
  return (
    <>
      <Grid item xs={3}>
        <ImageAvatar />
      </Grid>

      <Grid item xs={6}>
        <div className="header-text">Tharadol Boonma</div>
        <div className="detail-text">Programmer At CDG Systems</div>
      </Grid>
      <Grid item md={3} xs={3} style={{ textAlign: "right" }}>
        <Grid container direction="row" justify="flex-end">
          <Grid item xs={6}>
            <IconButton
              onClick={handleDrawerOpen}
              className="menu-button"
              style={{ display: "none" }}
            >
              <MenuIcon style={{ color: "white", fontSize: 30 }} />
            </IconButton>
          </Grid>
          <Grid item lg={12} md={10}>
            <Link
              href="https://page.line.me/?accountId=013hrele&openerPlatform=native&openerKey=qrcod"
              target="_blank"
              className="link-social"
            >
              <Button
                className="line-button button-header"
                startIcon={<TagFacesIcon style={{ fontSize: 30 }} />}
              >
                Line Chat Bot
              </Button>
            </Link>
          </Grid>
          <Grid item lg={12} md={10}>
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
          </Grid>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {socialGroup.map((item, index) => (
                <Link
                  style={{ color: "#900" }}
                  target="_blank"
                  href={item.link}
                >
                  <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {projectGroup.map((item, index) => (
                <Link
                  style={{ color: "#900" }}
                  target="_blank"
                  href={item.link}
                >
                  <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
