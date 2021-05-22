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
            textAlign: "left",
            padding: "10px 45px 10px 45px",
          }}
        >
          <h2 class="header-tab">Contact</h2>

          <center>
            <Grid container style={{ textAlign: "center" }}>
              <Grid lg item className="wrap-edu">
                <img
                  src="https://image.flaticon.com/icons/png/512/3649/3649439.png"
                  alt="High School"
                  className="image-edu"
                  loading="lazy"
                />
                <h2>tharadol.bm@gmail.com</h2>
              </Grid>
              <Grid lg item className="wrap-edu">
                <img
                  src={LineQrCodeImage}
                  className="image-edu"
                  alt="Bachelor"
                  loading="lazy"
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
