import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#d9d9d938",
    },
    red: {
      main: "rgb(242, 59, 47)",
    },
    redBold: {
      main: "rgb(218, 26, 15)",
    },
    blue:{
      main:'rgb(66, 103, 178)'
    },
    dark:{
      main:'rgb(60, 60, 60)'
    }

  },
  typography: {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontSize10: {
      fontWeight: 700,
      fontSize: "10px",
    },
    fontSize16: {
      fontWeight: 700,
      fontSize: "16px",
    },
    fontSize24: {
      fontSize: "24px",
      fontWeight: 900,
    },
    fontSize400: {
      fontSize: "10px",
      fontWeight: 400,
    },
    fontSize12: {
      fontSize: "12px",
      fontWeight: 700,
    },
    fontSize12400: {
      fontSize: "12px",
      fontWeight: 400,
    },
    fontSize22:{
      fontSize: "22px",
      fontWeight:700
    },
    fontSize14:{
      fontSize: "14px",
      fontWeight:700
    }
  },
});

export default theme;
