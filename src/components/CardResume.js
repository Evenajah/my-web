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
      <div className="header-grid">
        <Grid container item className="content-wrap">
          <Header />
          <Grid item lg={3} alignItems="center">
            <IconSocialGroup />
          </Grid>
          <Grid
            item
            lg={9}
            className="wrap-tab"
            style={{ margin: "-7vw 0px 0px 0px" }}
          >
            <TabMenues />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default CardResume;
