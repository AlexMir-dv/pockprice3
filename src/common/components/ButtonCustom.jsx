import React from "react";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";
function ButtonCustom({ danger,text }) {
  return (
    <ButtonItem
      danger={danger}
      startIcon={!danger && <FacebookIcon />}
      fullWidth
      variant="contained"
      sx={{ borderRadius: "10px", padding: "10px 8px" }}
    >
      {text}
    </ButtonItem>
  );
}

const ButtonItem = styled(Button)(({ theme, danger }) => ({
  display: "flex",
  textTransform:"lowercase",
  fontWeight:700,
  fontSize:'14px',
  boxShadow:'none',
  background: danger ? "red" : theme.palette.blue.main,
  "& span":{
    position: "absolute",
    left: "22px",
    borderRadius:"50%"
  }
}));

export default ButtonCustom;
