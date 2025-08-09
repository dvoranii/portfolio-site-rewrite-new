import React from "react";
import {
  FooterWrapper,
  FooterInner,
  FooterLeftSide,
  FooterRightSide,
  LogoWrapper,
  CopyrightText,
  ListContainer,
  SectionTitle,
  NavTitleContainer,
  SocialsTitleContainer,
  FooterList,
  SocialsList,
  FooterLink,
  SocialLink,
  SocialLogo,
} from "./Footer.styles";

// Import assets - adjust paths based on your actual asset structure
import FooterLogo from "../../assets/images/Footer/footer-logo.png";
import GithubLogo from "../../assets/images/Footer/logo-github.svg";
import LinkedInLogo from "../../assets/images/Footer/logo-linkedin.svg";
import CodepenLogo from "../../assets/images/Footer/logo-codepen.svg";

interface SocialLinkData {
  href: string;
  logo: string;
  alt: string;
  text: string;
  target?: string;
  rel?: string;
}

interface NavLinkData {
  href: string;
  text: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks: NavLinkData[] = [
    { href: "/#section1", text: "Home" },
    { href: "/#about-me", text: "About Me" },
    { href: "/#skills", text: "My Skills" },
    { href: "/#projects", text: "My Projects" },
  ];

  const socialLinks: SocialLinkData[] = [
    {
      href: "https://github.com/dvoranii",
      logo: GithubLogo,
      alt: "GitHub Logo",
      text: "Github",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "https://www.linkedin.com/in/ildi-dvorani-a04452210/",
      logo: LinkedInLogo,
      alt: "LinkedIn Logo",
      text: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "https://codepen.io/dvoranii",
      logo: CodepenLogo,
      alt: "CodePen Logo",
      text: "Codepen",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLeftSide>
          <LogoWrapper>
            <img src={FooterLogo} alt="ILDIDEV Logo" />
          </LogoWrapper>
          <CopyrightText>
            ILDIDEV<sup>&reg;</sup> {currentYear} - <i>All rights reserved</i>
          </CopyrightText>
        </FooterLeftSide>

        <FooterRightSide>
          <ListContainer>
            <NavTitleContainer>
              <SectionTitle>Navigation</SectionTitle>
            </NavTitleContainer>
            <FooterList>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
              ))}
            </FooterList>
          </ListContainer>

          <ListContainer>
            <SocialsTitleContainer>
              <SectionTitle>Socials</SectionTitle>
            </SocialsTitleContainer>
            <SocialsList>
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <SocialLogo src={social.logo} alt={social.alt} />
                  <SocialLink
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                  >
                    {social.text}
                  </SocialLink>
                </li>
              ))}
            </SocialsList>
          </ListContainer>
        </FooterRightSide>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
