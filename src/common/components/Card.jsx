import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { styled } from "@mui/material/styles";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const Card = ({ item }) => {
  return (
    <Box mb={3}>
      <CardItem>
        <BoxImg>
          <img src={item.url} width={110} height={160} alt={"card"} />
        </BoxImg>
        <CardPrice sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "42px",
              textAlign: "center",
            }}
          >
            <Typography variant="fontSize16">{item.price}</Typography>
            <Typography variant="fontSize10">{item.brand}</Typography>
          </Box>
          <Box>
            <IconButton>
              <UnfoldMoreIcon />
            </IconButton>
          </Box>
        </CardPrice>
        {/* ADD To CARD COUNT IF EXIST */}
        <Box sx={{display:"flex",gap:"10px"}} my={1}>
          <BoxActions sx={{flexGrow:1}}>-</BoxActions>
          <BoxActions sx={{flexGrow:2,justifyContent:"space-around"}}>
            <Typography>0</Typography>
            <IconButton size="sm">
              <UnfoldMoreIcon fontSize="20px" />
            </IconButton>
          </BoxActions>
          <BoxActions sx={{flexGrow:1}}>+</BoxActions>
        </Box>
        <BoxActions>
          <Typography variant="fontSize14">Add Graded</Typography>
          <IconButton size="small" >
            <LibraryAddIcon fontSize="20px" color="dark"/>
          </IconButton>
        </BoxActions>
        {/* ADD To CARD COUNT IF EXIST */}
      </CardItem>
      <Box sx={{ border: "1px solid rgb(227 225 225)", padding: "7px" }}>
        <CardImgBrand>
          <Typography variant="fontSize12400">{item.count}</Typography>
          <img src="/image/MEW.png" width={15} height={15} />
        </CardImgBrand>
        <Typography variant="fontSize12">{item.brand2}</Typography>
      </Box>
    </Box>
  );
};

const CardItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  backgroundColor: "#8b86861c",
  width: "175px",
  padding: "11px 14px",
});
const BoxImg = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "8px",
  "& img": {
    objectFit: "cover",
    borderRadius: "8px",
  },
});

const CardPrice = styled(Box)({
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "4px",
  height: "40px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 8px",
});


const BoxActions =styled(Box)({
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "4px",
  height: "40px",
  // width: "100%",
  display:'flex',
  justifyContent:"center",
  alignItems:'center',
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 8px",
})


const CardImgBrand = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  "& img": {
    objectFit: "cover",
  },
});
export default Card;
