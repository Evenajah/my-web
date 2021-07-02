import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import DotnetImage from "../../../assets/Images/dotnet.png";
import Tooltip from "@material-ui/core/Tooltip";
//image
import AngularImage from "../../../assets/Images/angular.png";
import CSharpImage from "../../../assets/Images/cSharp.png";
import CssImage from "../../../assets/Images/CSS.png";
import FirebaseImage from "../../../assets/Images/Firebase.png";
import GithubImage from "../../../assets/Images/github.png";
import HtmlImage from "../../../assets/Images/html.png";
import JavascriptImage from "../../../assets/Images/js.png";
import ReactImage from "../../../assets/Images/React.png";
import TypescriptImage from "../../../assets/Images/ts.svg";

const Skills = () => {
  return (
    <Grid>
      <Card className="card-about">
        <CardContent>
          <h2 class="header-tab">Skills</h2>
          <Grid container justify="center">
            <Grid item lg>
              <Tooltip arrow title={<h1>React</h1>}>
                <img alt="react" src={ReactImage} className="image-skills" />
              </Tooltip>
              <Tooltip arrow title={<h1>Angular</h1>}>
                <img
                  alt="Angular"
                  className="image-skills"
                  src={AngularImage}
                />
              </Tooltip>

              <Tooltip arrow title={<h1>DotNet</h1>}>
                <img alt="DotNet" src={DotnetImage} className="image-skills" />
              </Tooltip>

              <Tooltip arrow title={<h1>C#</h1>}>
                <img alt="C#" src={CSharpImage} className="image-skills" />
              </Tooltip>

              <Tooltip arrow title={<h1>HTML</h1>}>
                <img alt="HTML" src={HtmlImage} className="image-skills" />
              </Tooltip>

              <Tooltip arrow title={<h1>CSS</h1>}>
                <img alt="CSS" src={CssImage} className="image-skills" />
              </Tooltip>

              <Tooltip arrow title={<h1>Javascript</h1>}>
                <img
                  alt="Javascript"
                  src={JavascriptImage}
                  className="image-skills"
                />
              </Tooltip>

              <Tooltip arrow title={<h1>Typescript</h1>}>
                <img
                  alt="Typescript"
                  src={TypescriptImage}
                  className="image-skills"
                />
              </Tooltip>

              <Tooltip arrow title={<h1>Github</h1>}>
                <img alt="Github" src={GithubImage} className="image-skills" />
              </Tooltip>

              <Tooltip arrow title={<h1>Firebase Realtime Database</h1>}>
                <img
                  alt="Firebase Realtime Database"
                  src={FirebaseImage}
                  className="image-skills"
                />
              </Tooltip>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Skills;
