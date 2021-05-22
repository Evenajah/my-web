import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import AngularImage from "../../../assets/Images/angular.png";
import SpringBootImage from "../../../assets/Images/spring.png";
import DotnetImage from "../../../assets/Images/.net.png";
import CSharpImage from "../../../assets/Images/cSharp.png";

const Experience = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent
          style={{
            textAlign: "left",
            padding: "10px 45px 10px 45px",
          }}
        >
          <h2 class="header-tab">Experience</h2>
          <Grid container>
            <Grid item lg={6}>
              <Card style={{ margin: 20 }}>
                <CardContent
                  style={{
                    textAlign: "left",
                    padding: "10px 45px 10px 45px",
                  }}
                >
                  <h2>Internship CDG Time Attendence (CDGS)</h2>
                  <h4>(06 Jan 2020 - 30 May 2020)</h4>
                  <h4>
                    Create System Time Attendence For CDG Systems By Angular And
                    Spring Boot Framework
                  </h4>
                  <img
                    width="70"
                    alt="angular"
                    src={AngularImage}
                    loading="lazy"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <img
                    width="70"
                    alt="spring"
                    src={SpringBootImage}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card style={{ margin: 20 }}>
                <CardContent
                  style={{
                    textAlign: "left",
                    padding: "10px 45px 10px 45px",
                  }}
                >
                  <h2>Afis Systems (CDGS)</h2>
                  <h4>(01 Sep 2020 - Present)</h4>
                  <h4>
                    Create Afis (Automated Fingerprint Identification System)
                    For Royal Thai Police By .NET And WPF Framework
                  </h4>
                  <img
                    width="60"
                    alt="csharp"
                    src={CSharpImage}
                    loading="lazy"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <img
                    width="70"
                    alt="dotnet"
                    src={DotnetImage}
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Experience;
