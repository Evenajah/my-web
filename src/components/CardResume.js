import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import useStyles from "../style/style";
import Header from "./Header";
import TabMenues from "./tabmenues/TabMenues";
import IconSocialGroup from "./IconSocialGroup";

const CardResume = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container className="header-grid" item style={{ padding: "2vw" }}>
        <Header />

        <Grid item lg={3} justify="flex-start" alignItems="center">
          <IconSocialGroup />
        </Grid>
        <Grid item lg={9} style={{ margin: "-7vw 0px 0px 0px" }}>
          <TabMenues />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardResume;
