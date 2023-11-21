import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import MenuBottom from "./MenuBottom";
import DialogCustom from "./DialogCustom";
import { Button } from "@mui/material";
const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSignUpDialog, setOpenSignUp] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpenSignUp(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        ...(open && { background: "#0000003b !important" }),
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <AppBarFlex>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ textAlign: "center" }}>
              <Typography>pokeprice.io</Typography>
              <Typography component={"strong"} variant="fontSize16">
                Home
              </Typography>
            </Box>
            <AppBarSign>
              <Box>
                <Typography
                 onClick={handleClickOpen}
                  variant="fontSize10"
                  sx={{
                    backgroundColor: "white",
                    color: (theme) => theme.palette.red.main,
                    borderRadius: "12px",
                    padding: "2px 4px",
                    cursor:"pointer"
                  }}
                >
                  SIGN UP
                </Typography>
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.redBold.main,
                    borderRadius: "12px",
                    width: "27px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "23px",
                  }}
                >
                  <Typography variant="fontSize10">0%</Typography>
                </Box>
              </Box>
              <SignIcon>
                <AccountCircleIcon />
              </SignIcon>
            </AppBarSign>
          </AppBarFlex>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "0px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menuList.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {item.Icon}
                </ListItemIcon>
                <ListItemTextSpan primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader sx={{ background: "none" }} />
        {children}
      </Main>
      <MenuBottom open={open} />

      <DialogCustom 
         open={openSignUpDialog} 
         maxWidthSize={"xs"}
         setOpen={setOpenSignUp}
       />
    </Box>
  );
};

const menuList = [
  { name: "Home", Icon: <HomeIcon /> },
  { name: "User Profile", Icon: <AccountCircleIcon /> },
  { name: "Chat With Us", Icon: <ChatBubbleIcon /> },
  { name: "Change Currency", Icon: <CurrencyExchangeIcon /> },
  { name: "Privacy Policy", Icon: <VerifiedUserIcon /> },
  { name: "Terms and conditios", Icon: <FeaturedPlayListIcon /> },
  { name: "Data Deletion", Icon: <RequestPageIcon /> },
];
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "auto",
    width: "100%",
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      // background:'rgb(60, 60, 60)',
      zIndex: -2,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "&.MuiPaper-root": {
    backgroundColor: "rgba(242,59,47,1.00)",
    boxShadow: "none",
  },
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: theme.palette.red.main,
    "& .MuiPaper-root": {
      background: "#0000003b !important",
    },
    "&.MuiPaper-root": {
      boxShadow: "none",
      backgroundColor: theme.palette.red.main,
      borderRight: "none",
      zIndex: -1,
      "& .MuiDrawer-paper": {
        borderRight: "none",
      },
    },
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: "red",
  justifyContent: "flex-start",
  boxShadow: "none",
  "& svg": {
    color: "white",
    fontSize: "40px",
  },
}));

const ListItemTextSpan = styled(ListItemText)({
  "& span": {
    fontSize: "16px",
    fontWeight: 700,
  },
});

const AppBarFlex = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

const AppBarSign = styled(Box)({
  display: "flex",
});

const SignIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& svg": {
    fontSize: "33px",
  },
});
export default Layout;
