import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box ,IconButton} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import CardImg from '../../../assets/Image/MEW.png'
import BackImg from '../../../assets/Image/set-background-fallbac.jpg'
const CardCollection = ({img}) => {
  return (
    <Card sx={{flexGrow:1,position:"relative",borderRadius:"10px"}}>
       <FavorateIcon>
          <IconButton>
            <FavoriteBorderIcon color="red" />
          </IconButton>
       </FavorateIcon>
      <BoxCardMediaImg img={BackImg}>
        <CardMediaImg
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
      </BoxCardMediaImg>
      <CardContent sx={{display:"flex",alignItems:'center',justifyContent:"space-between",gap:"5px"}}>
        <Box sx={{display:"flex",alignItems:'center',gap:'4px'}}>
          <img src={CardImg} width={20} height={20}/>
          <Typography color={'dark.main'} >Pokémon Card 151</Typography>
        </Box>
        <Box>
          <Typography>0%</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:'center'}}>
          <Typography variant="fontSize14">$0.00</Typography>
          <Typography variant="fontSize14">/</Typography>
          <Typography variant="fontSize14">$388.9</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const BoxCardMediaImg = styled(Box)(({img})=>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${img})`,
  height: "145px",
}));

const CardMediaImg = styled(CardMedia)({
  width: "107px",
  height: "87px",
});


const FavorateIcon = styled(Box)({
  background:"rgb(255 255 255 / 32%)",
  borderRadius:"50%",
  position:"absolute",
  right: "6px",
    top: "10px",
})

export default CardCollection;
