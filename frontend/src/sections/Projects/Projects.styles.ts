import styled from "styled-components";

export const ProjectsSection = styled.section`
  width: 100%;
  margin-top: 2.4rem;
`;

export const ProjectsWrapper = styled.div`
  padding: 0 2.4rem 4.8rem;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 4.8rem;
`;

export const ProjectsGridWrapper = styled.div`
  padding: 2.4rem 0 2.4rem 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "project1 project1 project1 project2"
    "project3 project3 project4 project4"
    "project5 project6 project6 project6"
    "project7 project7 project8 project8";
  gap: 1px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);

  /* Dim non-hovered items */
  &:hover > div:not(:hover) > div {
    filter: brightness(0.5) saturate(0);
  }

  &:hover > div:not(:hover) img {
    filter: brightness(0.5) saturate(0.5);
  }

  &:hover > div:hover > div {
    filter: none;
    transform: scale(1.05);
    cursor: pointer;
  }

  &:hover > div:hover img {
    filter: none;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "project1 project1"
      "project2 project3"
      "project4 project5"
      "project6 project6"
      "project7 project8";
  }
`;

export const ProjectItem = styled.div<{
  $gridArea: string;
  $isProject3?: boolean;
}>`
  grid-area: ${(props) => props.$gridArea};
  min-height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* Specific project height adjustments */
  &:nth-child(1) {
    /* Project1 */
    min-height: 475px;
  }

  &:nth-child(3) {
    /* Project3 */
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:nth-child(5) {
    /* Project5 */
    height: 370px;
    background: #000;
  }

  &:nth-child(6) {
    /* Project6 */
    height: 370px;
  }

  &:nth-child(7) {
    /* Project7 */
    height: 400px;
  }
`;

export const GridItemBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;
  z-index: 0;
`;

export const Project3Image = styled.img`
  width: 50%;
  height: auto;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
`;
