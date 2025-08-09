import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  width: 80%;
  max-width: 1200px;
  max-height: 90vh;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: #ffffff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-height: 95vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MediaSection = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;

  .carousel {
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .flickity-viewport {
      height: 100% !important;
      background: #ddd;

      .flickity-slider {
        height: 92% !important;
        display: flex;
        align-items: center;
      }
    }

    .flickity-button {
      background: rgba(255, 255, 255);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border: none;
      transition: all 150ms ease;
    }

    .flickity-button.flickity-prev-next-button.previous {
      position: absolute;
      top: 60%;
      left: 25px;
      transform: translateX(-50%) translateY(-150%);
    }
    .flickity-button.flickity-prev-next-button.next {
      position: absolute;
      top: 60%;
      left: 100%;
      transform: translateX(-120%) translateY(-150%);
    }
    .flickity-button:hover {
      background: #ffa714;
      cursor: pointer;
    }

    .flickity-button:disabled {
      opacity: 0.8;
      cursor: default;
    }

    .flickity-button:disabled .flickity-button-icon {
      fill: grey;
    }

    .flickity-button:disabled:hover {
      background: none;
    }
    .flickity-prev-next-button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .flickity-button-icon {
      fill: #222;
      width: 18px;
      margin-top: 3px;
    }

    .flickity-page-dots {
      bottom: 0px;
      display: flex;
      gap: 10px;
      list-style: none;
      justify-content: center;
      margin-top: -20px;
    }

    .flickity-page-dots .dot {
      width: 8px;
      height: 8px;
      margin-left: 4px;
      opacity: 1;
      background: transparent;
      border-radius: 50%;
      outline: 1px solid black;
      background-color: transparent;
      transition: all 150ms ease;
    }

    .flickity-page-dots .dot:hover {
      background: rgb(196, 196, 196);
      cursor: pointer;
    }

    .flickity-page-dots .dot.is-selected {
      background: black;
    }
  }

  @media (max-width: 768px) {
    min-height: 300px;

    .carousel .flickity-button.flickity-prev-next-button.next {
      transform: translateX(-125%) translateY(-150%);
    }
  }
`;

export const InfoSection = styled.div`
  padding: 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

export const Description = styled.p`
  line-height: 1.6;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`;

export const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 18px;
    height: 18px;
  }
`;
