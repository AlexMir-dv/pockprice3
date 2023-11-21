import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const list = [
  {
    name: "Prices",
    icon: <PaymentIcon />,
    href: "/item",
  },
  {
    name: "Collect",
    icon: <FeaturedPlayListIcon />,
    href: "/collection",
  },
  {
    name: "My Stats",
    icon: <InsertChartIcon />,
  },
  {
    name: "MarketPlace",
    icon: <StorefrontIcon />,
  },
  {
    name: "Directory",
    icon: <PublicIcon />,
  },
];
const MenuBottom = ({ open }) => {
  return (
    <MenuBottomList open={open}>
      {list.map((item, index) => (
        <Link to={item.href} key={index}>
          <Box key={index} sx={{ textAlign: "center", lineHeight: "10px" }}>
            <Box>{item.icon}</Box>
            <Typography variant="fontSize10">{item.name}</Typography>
          </Box>
        </Link>
      ))}
    </MenuBottomList>
  );
};

const MenuBottomList = styled(Box)(({theme, open }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px 8px",
  padding: "8px",
  background: "#fff",
  zIndex: open && -2,
  "& a":{
    textDecoration:"none",
    color:theme.palette.dark.main
  }
}));

export default MenuBottom;
