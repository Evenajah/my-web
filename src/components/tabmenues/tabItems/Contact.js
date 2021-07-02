import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
//image
import LineQrCodeImage from "../../../assets/Images/QrLine.jpg";
const Contact = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent
          style={{
            textAlign: "center",
          }}
        >
          <h2 class="header-tab">Contact</h2>
          <center>
            <Grid container justify="center">
              {/* <Grid lg item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/2097/2097276.png"
                  className="image-edu"
                  alt="Primary"
       
                />
                <h2>(+66) 838639511</h2>
              </Grid> */}
              <Grid lg sm={5} xs={12} item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/3649/3649439.png"
                  alt="High School"
                  className="image-edu"
                />
                <h2>tharadol.bm@gmail.com</h2>
              </Grid>
              <Grid lg sm={5} xs={12} item className="wrap-edu">
                <img
                  src={LineQrCodeImage}
                  className="image-edu"
                  alt="Bachelor"
                />
                <h2>@roymalifex</h2>
              </Grid>
            </Grid>
          </center>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Contact;
