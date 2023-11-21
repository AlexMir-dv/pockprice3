import React from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "../../components/Card";
import TabsCustom from "../../components/Tabs/TabsCustom";
import { listCardsItem } from "../../../utils/constans";

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
            <Card item={item} key={index} />
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
          <Card item={item} key={index} />
        ))}
      </Box>
    </Container>
    ),
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
          <Card item={item} key={index} />
        ))}
      </Box>
    </Container>
    ),
  },
];

const PriceItem = () => {
  return (
    <Box mt={2}>
      <TabsCustom tabs={tabs} />
    </Box>
  );
};

export default PriceItem;
