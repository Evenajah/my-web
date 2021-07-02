import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";

const AboutMe = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent>
          <div>
            <h2 class="header-tab">About Me</h2>
            <h3>• Name : Tharadol Boonma</h3>
            <h3>• Nickname : Eve</h3>
            <h3>• Birthdate : 19 June 1998</h3>

            <h3>• Age : 22</h3>
            <h3>• Religion : Islam</h3>
            <h3>• Race : Thai</h3>
            <h3>
              • Address : 16 Prachautid Road Soi Prachautid 33 yaek 10 Bangmod
              Thungkru Bangkok 10140
            </h3>
            <h3>• Hobby : Play Videogame, Play Guitar</h3>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AboutMe;
