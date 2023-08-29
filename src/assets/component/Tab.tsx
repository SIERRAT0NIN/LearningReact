import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="tab" id="projects">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Project One" {...a11yProps(0)} />
            <Tab label="Project Two" {...a11yProps(1)} />
            <Tab label="Project Three" {...a11yProps(2)} />
            {/* <Tab label="Project Four" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <p id="projectTitle">Projects</p>
        <CustomTabPanel value={value} index={0}>
          <img
            src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50fGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1529924736887-7f19bef8bc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
            alt=""
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <img
            src="https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1529924736887-7f19bef8bc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
            alt=""
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <img
            src="https://images.unsplash.com/photo-1529924736887-7f19bef8bc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
            alt=""
          />
        </CustomTabPanel>
        {/* 
        <CustomTabPanel value={value} index={3}>
          <img src="../../images/AI-Golden" alt="" />
        </CustomTabPanel> */}
      </Box>
    </div>
  );
}
