import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding-top: 1.2rem;
  /* padding-bottom: 2.4rem; */
`;

export const FooterInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const FooterLeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 20px;

  @media screen and (max-width: 551px) {
    margin-top: 50%;
  }
`;

export const FooterRightSide = styled.div`
  width: 50%;
  display: flex;
  gap: 64px;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 700px) {
    gap: 24px;
  }

  @media screen and (max-width: 551px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  img {
    max-width: 60px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  padding-top: 4px;
  margin: 0;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: #333;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`;

export const NavTitleContainer = styled.div`
  position: relative;
  border-bottom: 2px solid #0777da;
  padding-bottom: 2px;
  width: 145px;

  &::before {
    content: "";
    width: 65px;
    height: 12px;
    background-color: #f2c94c;
    position: absolute;
    bottom: 5px;
    left: 80px;
    z-index: -1;
  }
`;

export const SocialsTitleContainer = styled.div`
  position: relative;
  border-bottom: 2px solid #0777da;
  padding-bottom: 2px;
  width: 102px;

  &::before {
    content: "";
    width: 52px;
    height: 12px;
    background-color: #f2c94c;
    position: absolute;
    bottom: 4px;
    left: 50px;
    z-index: -1;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 8px;
  line-height: 2;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-decoration: underline;

  li {
    transition: all 150ms ease;

    &:hover {
      cursor: pointer;
      text-shadow: 0px 0px 8px rgb(0, 224, 224);
    }
  }
`;

export const SocialsList = styled(FooterList)`
  li {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 2.75;

    &:hover {
      cursor: pointer;
      text-shadow: 0px 0px 8px rgb(0, 224, 224);
    }
  }
`;

export const FooterLink = styled.a`
  color: black;
  text-decoration: inherit;

  &:hover {
    color: inherit;
  }
`;

export const SocialLink = styled.a`
  color: black;
  text-decoration: inherit;

  &:hover {
    color: inherit;
  }
`;

export const SocialLogo = styled.img`
  max-width: 25px;
`;
