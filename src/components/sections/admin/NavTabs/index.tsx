import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "components/lib";
import { BlogCategories, Blogs, Skills } from "components/sections";
import { SyntheticEvent, useState } from "react";

function a11yProps(index: number) {
  return {
    id: `ui-tab-${index}`,
    "aria-controls": `ui-tabpanel-${index}`,
  };
}

export function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Blog Categories" {...a11yProps(1)} />
          <Tab label="Blogs" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BlogCategories />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Blogs />
      </TabPanel>
    </Box>
  );
}
