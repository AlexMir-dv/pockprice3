import {
  Box,
  Typography,
  FormControl,
  FilledInput,
  InputAdornment,
  InputLabel,
  IconButton,
  TextField,
  Input,
  Container,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputSearch from "../../components/InputSearch";
import TagItem from "../../components/Home/TagItem";
import SectionCategoris, { childrenTypes } from "../../components/Home/SectionCategoris";
function Home() {
  return (
    <Box>
      <HeaderHome>
        <Box sx={{ position: "relative" }}>
          <HeaderBanner></HeaderBanner>
          <HeaderBannerText variant="fontSize24" color={"white"}>
            The quickest way to find and track the value of your cards
          </HeaderBannerText>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <InputSearch
            type={"text"}
            name={""}
            TypeSearch
            placeholder={"Who is the Best Pokemon Artist?"}
            IconStart={<SearchIcon sx={{ color: "white" }} /> 
          
          }
          />
        </Box>
      </HeaderHome>
      <Container
        maxWidth={"xl"}
        sx={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Box>
          <SectionCategoris
            title={"Today's Trending"}
            name={"Tags"}
            type={childrenTypes.SECTION_SERIES}
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending "}
            name={"Cards"}
            type={childrenTypes.SECTION_POKEMON}
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Series "}
            name={"Scarlet and Violet"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Pokemon"}
            name={"umbreon"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Pokemon"}
            name={"blastoise"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Set"}
            name={"Obsidian Flames"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Set"}
            name={"Nintendo Black Star Promos"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Card energy type"}
            name={"darkness"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Card artist"}
            name={"5ban Graphics"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
        <Box>
          <SectionCategoris
            title={"Trending Card Rarity"}
            name={"Special Illustration Rare"}
            type={childrenTypes.SECTION_POKEMON}
            linkAction
          />
        </Box>
      </Container>
    </Box>
  );
}

const HeaderHome = styled(Box)(({ theme }) => ({
  background: theme.palette.red.main,
}));

const HeaderBanner = styled(Box)({
  background:
    "rgba(0,0,0,0.5) url('image/pokemon-grass-battle-background.jpg')",
  height: "185px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    backgroundColor: "#76767459",
    width: "100%",
    height: "100%",
  },
});

const HeaderBannerText = styled(Typography)({
  position: "absolute",
  top: "50%",
  textAlign: "center",
  transform: "translateY(-50%)",
  textShadow: "0px 0px 2px rgba(242,59,47,1.00)",
  letterSpacing: "0.5px",
  left: "50%",
  transform: "translateX(-50%)",
});

export default Home;
