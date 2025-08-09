import React, { useState, useEffect } from "react";
import * as S from "./Navigation.styles";
import SocialButtons from "./SocialButtons/SocialButtons";

import NavLogo from "../../assets/images/Navigation/headerLogo.png";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [navActive, setNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#section1");

      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const heroBottom = rect.bottom;
        setIsFixed(heroBottom <= 0);
      } else {
        console.log("Hero section not found!");
      }
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileView]);

  const handleNavLinkClick = () => {
    setNavActive(false);
  };

  return (
    <S.NavWrapper className={className} $isFixed={isMobileView || isFixed}>
      <S.Nav>
        <S.NavLogoWrapper>
          <S.NavLogo loading="lazy" src={NavLogo} alt="Portfolio Logo" />
        </S.NavLogoWrapper>

        <S.NavList $navActive={navActive}>
          <li>
            <S.NavLink href="#about-me" onClick={handleNavLinkClick}>
              About Me
            </S.NavLink>
          </li>
          <li>
            <S.NavLink href="#skills" onClick={handleNavLinkClick}>
              Skills
            </S.NavLink>
          </li>
          <li>
            <S.NavLink href="#projects" onClick={handleNavLinkClick}>
              Projects
            </S.NavLink>
          </li>
          <li>
            <S.NavLink href="#contact" onClick={handleNavLinkClick}>
              Contact
            </S.NavLink>
          </li>
          <SocialButtons />
        </S.NavList>

        <S.Burger onClick={() => setNavActive((prev) => !prev)}>
          <S.BurgerLine $navActive={navActive} $lineNumber={1}>
            &nbsp;
          </S.BurgerLine>
          <S.BurgerLine $navActive={navActive} $lineNumber={2}>
            &nbsp;
          </S.BurgerLine>
          <S.BurgerLine $navActive={navActive} $lineNumber={3}>
            &nbsp;
          </S.BurgerLine>
        </S.Burger>
      </S.Nav>

      {navActive && <S.NavOverlay onClick={() => setNavActive(false)} />}
    </S.NavWrapper>
  );
};

export default Navigation;
