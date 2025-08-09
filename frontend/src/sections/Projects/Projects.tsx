import * as S from "./Projects.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Element } from "react-scroll";
import { useScrollOpacity } from "../../Hooks/useScrollOpacity";
import Modal from "./Modal/Modal";
import projects, { type Project } from "./config/projectsData";

import GUMThumb from "../../assets/images/Projects/GUM.webp";
import YMCAThumb from "../../assets/images/Projects/YMCA-BG.png";
import ElegantWhite from "../../assets/images/Projects/elegant-white-bg.jpg";
import OPThumb from "../../assets/images/Projects/OutpostThumb.webp";
import OGThumb from "../../assets/images/Projects/og-thumb.webp";
import CGLThumb from "../../assets/images/Projects/CGL-Thumb.webp";
import FSFThumb from "../../assets/images/Projects/fsf-portfolio-thumbnail.png";
import IldiDevThumb from "../../assets/images/Projects/ildidev-thumb.png";
import PersonalProjectsThumb from "../../assets/images/Projects/personal-projects-thumb.png";
import { useState } from "react";

const thumbnailMap: Record<number, string> = {
  1: GUMThumb,
  2: YMCAThumb,
  3: ElegantWhite,
  4: OPThumb,
  5: CGLThumb,
  6: OGThumb,
  7: PersonalProjectsThumb,
  8: IldiDevThumb,
};

const bgPositionMap: Record<number, string> = {
  1: "0px -95px",
  2: "center",
  3: "center",
  4: "-40px",
  5: "-10px",
  6: "0px -130px",
  7: "0px -25px",
  8: "0px",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = useScrollOpacity("projects", 150, 0.4, {
    animateBackground: true,
    animateBrightness: true,
    startBg: "#000000",
    endBg: "#ffffff",
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <SectionTitle textContent="Projects" paddingTop="2.4rem" />

      <Element name="projects">
        <S.ProjectsSection
          id="projects"
          style={{
            backgroundColor: styles.backgroundColor,
            filter: styles.filter,
            transition: "background-color 0.3s ease-out, filter 0.3s ease-out",
          }}
        >
          <S.ProjectsWrapper>
            <S.ProjectsGridWrapper>
              <S.ProjectsGrid>
                {projects.map((project) => (
                  <S.ProjectItem
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    $gridArea={`project${project.id}`}
                    $isProject3={project.id === 3}
                  >
                    <S.GridItemBackground
                      style={{
                        backgroundImage: `url(${thumbnailMap[project.id]})`,
                        backgroundPosition: bgPositionMap[project.id],
                      }}
                    />
                    {project.id === 3 && (
                      <S.Project3Image src={FSFThumb} alt="" />
                    )}
                  </S.ProjectItem>
                ))}
              </S.ProjectsGrid>
            </S.ProjectsGridWrapper>
          </S.ProjectsWrapper>
        </S.ProjectsSection>
      </Element>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
