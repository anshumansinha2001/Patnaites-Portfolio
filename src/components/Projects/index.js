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
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects in web devlopment.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("web app")}
            >
              Frontend
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              Frontend
            </ToggleButton>
          )}

          <Divider />
          {toggle === "backend" ? (
            <ToggleButton
              active
              value="backend"
              onClick={() => setToggle("backend")}
            >
              Backend
            </ToggleButton>
          ) : (
            <ToggleButton value="backend" onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
