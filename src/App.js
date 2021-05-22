import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import CardResume from "./components/CardResume";
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
