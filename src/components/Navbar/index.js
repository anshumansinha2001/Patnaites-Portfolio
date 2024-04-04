import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
// import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#event">Events</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.adminProfile} target="_blank">
            Admin Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#services"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </MobileLink>
            <MobileLink
              href="#event"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Events
            </MobileLink>
            <MobileLink
              href="#gallery"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Gallery
            </MobileLink>

            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact Us
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.adminProfile}
              target="_blank"
            >
              Admin Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
