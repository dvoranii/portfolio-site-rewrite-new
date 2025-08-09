// import { useState, useRef } from "react";
import * as S from "./Modal.styles";
import Flickity from "react-flickity-component";
import { type Project } from "../config/projectsData";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const flickityOptions = {
  initialIndex: 0,
};

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.MediaSection>
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {project.galleryImages.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
          </Flickity>
        </S.MediaSection>
        <S.InfoSection>
          <S.Title>{project.title}</S.Title>
          <S.Description>{project.description}</S.Description>

          <S.TechStack>
            {project.techStack.map((tech) => (
              <S.TechIcon key={tech} title={tech}>
                <img src={``} alt={tech} />
              </S.TechIcon>
            ))}

            {(project.figmaLink ||
              project.githubURL ||
              project.liveDemoURL) && (
              <S.ActionButtons>
                {project.githubURL && project.githubURL !== "N/A" && (
                  <S.Button
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/icons/github.svg" alt="GitHub" />
                    View Code
                  </S.Button>
                )}

                {project.liveDemoURL && project.liveDemoURL !== "N/A" && (
                  <S.Button
                    href={project.liveDemoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/icons/external-link.svg"
                      alt="Live Demo"
                    />
                    Live Demo
                  </S.Button>
                )}

                {project.figmaLink && (
                  <S.Button
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/icons/figma.svg" alt="Figma" />
                    Figma Design
                  </S.Button>
                )}
              </S.ActionButtons>
            )}
          </S.TechStack>
        </S.InfoSection>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default Modal;
