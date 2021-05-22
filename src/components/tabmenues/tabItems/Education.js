import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Education = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent
          style={{
            textAlign: "left",
            padding: "10px 45px 10px 45px",
            minHeight: "45vh",
          }}
        >
          <h2 class="header-tab">Education</h2>

          <center>
            <Grid container style={{ textAlign: "center" }}>
              <Grid lg item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/2789/2789877.png"
                  className="image-edu"
                  alt="Primary"
                  loading="lazy"
                />
                <h3>Primary : Santidarun School</h3>
              </Grid>
              <Grid lg item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/2883/2883830.png"
                  alt="High School"
                  className="image-edu"
                  loading="lazy"
                />
                <h3>High School : Islamic college of Thailand</h3>
                <h3>Majority : Eng Math</h3>
              </Grid>
              <Grid lg item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/4455/4455620.png"
                  className="image-edu"
                  alt="Bachelor"
                  loading="lazy"
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
