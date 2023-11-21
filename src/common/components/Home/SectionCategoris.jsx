import React from "react";
import { Box, Typography } from "@mui/material";
import TagItem from "./TagItem";
import { styled } from "@mui/material/styles";
import Card from "../Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const listTags = [
  {
    title: "Series",
    name: "Scarlet and Violet",
  },
  {
    title: "Pokemon",
    name: "umbreon",
  },
  {
    title: "Pokemon",
    name: "blastoise",
  },
  {
    title: "Set",
    name: "Obsidian Flames",
  },
  {
    title: "Set",
    name: "Nintendo Black Star Promos",
  },
  {
    title: "Card energy type",
    name: "darkness",
  },
  {
    title: "Card artist",
    name: "5ban Graphics",
  },
  {
    title: "Card Rarity",
    name: "Special Illustration Rare",
  },
];

export const listCards = [
    {
        url:'/image/card1.webp',
        price:'$50',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
      {
        url:'/image/card2.webp',
        price:'$43.5',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card3.webp',
        price:'$76',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card4.webp',
        price:'$20',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card5.webp',
        price:'$40',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card3.webp',
        price:'$76',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card4.webp',
        price:'$20',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
    {
        url:'/image/card5.webp',
        price:'$40',
        brand:'eBay',
        count:"215 / 197",
        brand2:'Charizard ex'
    },
]

export const childrenTypes = {
  SECTION_SERIES: "Series",
  SECTION_POKEMON: "Pokemon",
};

const SectionCategoris = ({ type, title, name, linkAction }) => {
  const RenderChildrenSection = () => {
    switch (type) {
      case childrenTypes.SECTION_SERIES:
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {listTags.map((item, index) => (
              <Box key={index}>
                <TagItem title={item.title} name={item.name} />
              </Box>
            ))}
          </Box>
        );
      case childrenTypes.SECTION_POKEMON:
        return (
          <Box
            sx={{
              display: "flex",
              overflowX: "scroll",
              transition: "all ease 0.2s",
              gap: "10px",
            }}
          >
            {
                listCards.map((item,index)=>(
                    <Card item={item} key={index} />
                ))
            }
          </Box>
        );
      default:
        return <div>Error: Invalid User Role</div>;
    }
  };
  return (
    <SectionCategorisBox>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1.2rem",
          }}
        >
          <Typography variant="fontSize12" color={"rgb(60 60 59 / 85%)"}>
            {title}
          </Typography>
          <Typography variant="fontSize16">{name}</Typography>
        </Box>
        {linkAction && (
          <Box mt={1}>
            <ChevronRightIcon />
          </Box>
        )}
      </Box>

      {RenderChildrenSection()}
    </SectionCategorisBox>
  );
};

const SectionCategorisBox = styled(Box)({
  backgroundColor: "rgb(255, 255, 255)",
  padding: "16px",
  borderColor: "rgb(235, 235, 235)",
  borderWidth: "1px",
  borderRadius: "10px",
  // marginTop: "16px",
  marginBottom: "16px",
});

export default SectionCategoris;
