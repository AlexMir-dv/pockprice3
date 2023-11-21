import React from "react";
import { FormControl, InputAdornment, IconButton, Input } from "@mui/material";

import { styled } from "@mui/material/styles";
const InputSearch = ({
  placeholder,
  type,
  name,
  IconStart,
  EndIcon,
  TypeSearch,
  TypeSign,
  handleShowPassword
}) => {


  return (
    <FormControlMain
      sx={{
        m: TypeSearch ? 1 : 0,
        width: TypeSearch ? "34ch" : "100%",
        background: TypeSearch ? (theme) => theme.palette.redBold.main : "none",
        border: TypeSign ? "1px solid rgb(235, 235, 235)" : "none",
        color: "white",
        padding: "3px",
        borderRadius: "8px",
      }}
      variant="standard"
    >
      <InputText
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        disableUnderline={false}
        inputProps={{
          disableUnderline: true, // <== added this
          "&:after": {
            borderBottom: "none",
          },
          sx: {
            "& fieldset": { border: "none" },
            "&::placeholder": {
              color: TypeSearch ? "white" : "1px solid rgb(235, 235, 235)",
              fontWeight: 500,
              opacity: 1, // otherwise firefox shows a lighter color
            },
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              color="white"
              aria-label="toggle password visibility"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              {IconStart}
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="white"
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              {EndIcon}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControlMain>
  );
}

const InputText = styled(Input)({
  "&::placeholder": {
    color: "white",
  },
  "&:hover": {
    border: 0,
  },
  "& .MuiInputBase-root": {
    background: "red",
    "&:hover": {
      border: 0,
    },
  },
  "&::before": {
    border: 0,
    "&:hover": {
      border: 0,
    },
  },
});

const FormControlMain = styled(FormControl)({
  "& .MuiInputBase-root": {
    "&:hover": {
      border: 0,
    },
    "&::after": {
      border: 0,
      borderBottom: 0,
    },
    "&::before": {
      border: 0,
      borderBottom: 0,
    },
  },
});
export default InputSearch;
