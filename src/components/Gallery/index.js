import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./GalleryStyle";
import GalleryCard from "../Cards/GalleryCards";
import { gallerys } from "../../data/constants";

const Gallery = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("insight");
  return (
    <Container id="gallery">
      <Wrapper>
        <Title>Gallery</Title>
        <Desc>Showcasing Our Gallery of Achievements.</Desc>
        <ToggleButtonGroup>
          {toggle === "sample" ? (
            <ToggleButton
              active
              value="sample"
              onClick={() => setToggle("sample")}
            >
              Work Sample
            </ToggleButton>
          ) : (
            <ToggleButton value="sample" onClick={() => setToggle("sample")}>
              Work Sample
            </ToggleButton>
          )}
          <Divider />
          {toggle === "insight" ? (
            <ToggleButton
              active
              value="insight"
              onClick={() => setToggle("insight")}
            >
              Insights
            </ToggleButton>
          ) : (
            <ToggleButton value="insight" onClick={() => setToggle("insight")}>
              Insights
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {gallerys
            .filter((item) => item.category === toggle)
            .map((gallery, index) => (
              <GalleryCard
                key={index}
                gallery={gallery}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
