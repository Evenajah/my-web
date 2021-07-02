import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Education = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent>
          <h2 class="header-tab">Education</h2>

          <center>
            <Grid container justify="center">
              <Grid lg sm={5} xs={12} item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/2789/2789877.png"
                  className="image-edu"
                  alt="Primary"
                />
                <h3>Primary : Santidarun School</h3>
              </Grid>
              <Grid lg sm={5} xs={12} item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/2883/2883830.png"
                  alt="High School"
                  className="image-edu"
                />
                <h3>High School : Islamic college of Thailand</h3>
                <h3>Majority : Eng Math</h3>
              </Grid>
              <Grid lg sm={5} item xs={12} className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/4455/4455620.png"
                  className="image-edu"
                  alt="Bachelor"
                />
                <h3>Bachelor's degree : Suan Sunandha rajabhat University</h3>
                <h4>Majority : Computer Science</h4>
              </Grid>
            </Grid>
          </center>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Education;
