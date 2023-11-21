import React from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "../../components/Card";
import TabsCustom from "../../components/Tabs/TabsCustom";
import { listCardsItem } from "../../../utils/constans";
import CardCollection from "../../components/Collection/CardCollection";

const tabs = [
  {
    label: "Tab 1",
    Component: (
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            transition: "all ease 0.2s",
            gap: "10px",
          }}
        >
          {listCardsItem.map((item, index) => (
            <CardCollection key={index}  img={"/image/151.png"}/>
          ))}
        </Box>
      </Container>
    ),
  },
  {
    label: "Tab 2",
    Component: (
      <Container maxWidth={"lg"}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          transition: "all ease 0.2s",
          gap: "10px",
        }}
      >
        {listCardsItem.map((item, index) => (
          <CardCollection key={index} img={'/image/japone.png'} />
        ))}
      </Box>
    </Container>
    )
  },
    {
    label: "Tab 3",
    Component: (
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            transition: "all ease 0.2s",
            gap: "10px",
          }}
        >
          {listCardsItem.map((item, index) => (
            <CardCollection key={index}  img={"/image/151.png"}/>
          ))}
        </Box>
      </Container>
    ),
  },

];

const Collection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
        }}
      >
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab label="INTERNATIONAL" {...a11yProps(0)} />
          <AntTab label="JAPANESE" {...a11yProps(1)} />
        </AntTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <TabsCustom tabs={tabs} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabsCustom tabs={tabs} />
      </CustomTabPanel>
    </Box>
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
  zIndex: 4,
  "& .MuiTabs-flexContainer": {
    // justifyContent: "center",
  },
  "& .MuiTabs-indicator": {
    borderWidth: "0px",
    border: 0,
    backgroundColor: "transparent",
  },
}));

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: "50%",

    background: "rgb(255, 255, 255)",
    // [theme.breakpoints.up("sm")]: {
    //   // minWidth: 0,
    // },
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
      backgroundColor: "rgb(217 217 217)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
export default Collection;
