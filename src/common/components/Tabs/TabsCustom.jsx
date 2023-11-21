import React from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "../../components/Card";

const TabsCustom = ({tabs}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={4}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab label="All" {...a11yProps(0)} />
          <AntTab label="OWNED" {...a11yProps(1)} />
          <AntTab label="NEED" {...a11yProps(2)} />
        </AntTabs>
      </Box>
      {tabs.map(({ Component }, i) => (
        <CustomTabPanel value={value} index={i} key={i}>
          {Component}
        </CustomTabPanel>
      ))}
    </>
  );
};

function CustomTabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AntTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "0",
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
  "& .MuiTabs-indicator": {
    borderWidth: "2px",
    backgroundColor: theme.palette.red.main,
  },
}));

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: 700,
    fontSize: "12px",
    color: theme.palette.dark.main,
    "&:hover": {
      //   color: 'red',
      opacity: 1,
    },
    "&.Mui-selected": {
      color: theme.palette.dark.main,
      fontWeight: 700,
      fontSize: "12px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
export default TabsCustom;
