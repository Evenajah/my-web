import "./App.css";
import CardResume from "./components/CardResume";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
function App() {
  return (
    <div className="App" style={{ margin: 20 }}>
      <Fade in={true} {...(true ? { timeout: 700 } : {})}>
        <Grid container>
          <Grid item xs={12}>
            <CardResume />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default App;
