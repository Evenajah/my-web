import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PropTypes from "prop-types";
import React from "react";
import AboutMe from "./tabItems/AboutMe";
import Contact from "./tabItems/Contact";
import Education from "./tabItems/Education";
import Experience from "./tabItems/Experience";
import Skills from "./tabItems/Skills";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const TabMenues = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab-section">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab
          icon={<AccountCircleIcon style={{ fontSize: "4vh" }} />}
          label="About Me"
          {...a11yProps(0)}
        />
        <Tab
          icon={<SchoolIcon style={{ fontSize: "4vh" }} />}
          label="Education"
          {...a11yProps(1)}
        />
        <Tab
          icon={<WorkIcon style={{ fontSize: "4vh" }} />}
          label="Experience"
          {...a11yProps(2)}
        />
        <Tab
          icon={<CodeIcon style={{ fontSize: "4vh" }} />}
          label="Skill"
          {...a11yProps(3)}
        />
        <Tab
          icon={<EmailIcon style={{ fontSize: "4vh" }} />}
          label="Contact"
          {...a11yProps(4)}
        />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <Contact />
      </TabPanel>
    </div>
  );
};

export default TabMenues;
