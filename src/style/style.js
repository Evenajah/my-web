import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    padding: 0,
    minHeight: "110vh",
    flex: 1,
    background: "#FFF0F5",
  },

  headerText: {
    fontSize: "3.5vw",
    textAlign: "left",
    color: "whitesmoke",
  },
  detailText: {
    fontSize: "1.3vw",
    textAlign: "left",
    color: "whitesmoke",
  },
}));

export default useStyles;
