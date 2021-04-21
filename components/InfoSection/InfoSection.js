import React, { useState, useEffect } from "react";
import { Container, Button } from "../../styles/globalStyles";
import ReactTooltip from "react-tooltip";
import Youtube from "react-youtube";

import styled from "styled-components";

function InfoSection({
  id,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  techsUsed,
  extraBtn,
  download,
  skills,
  headline,
  description,
  description2,
  description3,
  btnLink1,
  btnLink2,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  imgStart,
  start,
  AboutMeHeader,
  logoInfo,
  youtubeVideo,
  youtubeUrl,
  Icon,
  Icon2,
}) {
  const [logos, setLogos] = useState([]);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setLogos(logoInfo);
    if (window.innerWidth <= 960) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, []);

  const opts = {
    height: "400",
    width: "650",
    playersVars: {
      autoplay: 0,
    },
  };

  const mobileOpts = {
    height: "320",
    width: "360",
    playersVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <ContainerHeader lightText={lightText}>{AboutMeHeader}</ContainerHeader>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle2 lightTextDesc={lightTextDesc}>
                  {description2}
                </Subtitle2>
                <Subtitle3 lightTextDesc={lightTextDesc}>
                  {description3}
                </Subtitle3>
                {!techsUsed ? null : (
                  <TechWrapper skills={skills}>
                    {logos &&
                      logos.map((logo) => {
                        return (
                          <Tech>
                            <TechImage
                              key={logo.imgUrl}
                              src={logo.imgUrl}
                              data-tip={logo.tipText}
                              alt={"Tech"}
                            />
                            <ReactTooltip />
                          </Tech>
                        );
                      })}
                  </TechWrapper>
                )}
                <a
                  href={btnLink1}
                  target="_blank"
                  aria-label="Logo"
                  download={download}
                  rel="noopener noreferrer"
                >
                  <Button fontBig primary>
                    <ButtonItems>
                      <ButtonItem>{Icon}</ButtonItem>
                      <ButtonItem>{buttonLabel}</ButtonItem>
                    </ButtonItems>
                  </Button>
                </a>
                {!extraBtn ? null : (
                  <a
                    href={btnLink2}
                    target="_blank"
                    aria-label="Link"
                    rel="noopener noreferrer"
                  >
                    <Button fontBig primary>
                      <ButtonItems>
                        <ButtonItem>{Icon2}</ButtonItem>
                        <ButtonItem>{buttonLabel2}</ButtonItem>
                      </ButtonItems>
                    </Button>
                  </a>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start} skills={skills}>
                {!skills ? (
                  !youtubeVideo ? (
                    <Img src={img} alt={alt} />
                  ) : (
                    <Youtube
                      videoId={youtubeUrl}
                      opts={mobileView ? opts : mobileOpts}
                    />
                  )
                ) : (
                  <TechWrapper skills={skills}>
                    {logos &&
                      logos.map((logo) => {
                        return (
                          <Tech>
                            <TechImage
                              key={logo.imgUrl}
                              src={logo.imgUrl}
                              data-tip={logo.tipText}
                              skills={skills}
                              alt={"Tech"}
                            />
                          </Tech>
                        );
                      })}
                  </TechWrapper>
                )}
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

//styles

export const InfoSec = styled.div`
  color: #fff;
  padding: 190px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};

  @media screen and (max-width: 1919px) {
    padding: 160px 0;
  }
`;

export const ContainerHeader = styled.h1`
  font-size: 48px;
  margin-bottom: 100px;
  margin-top: -100px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: ${({ skills }) => (skills ? "400px" : "555px")};
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  background: ${({ skills }) => (skills ? "#fff" : null)};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Skills = styled.ul`
  padding-right: 0;
  border: solid 1px white;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const Subtitle2 = styled.p`
  max-width: 440px;
  margin-top: -25px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const Subtitle3 = styled.p`
  max-width: 440px;
  margin-top: -25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ButtonItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;
export const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem 0.2rem;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ skills }) => (skills ? null : "20px")};
  margin-top: 20px;
`;

export const Tech = styled.div`
  color: black;
  margin-right: 7px;
  margin-bottom: 5px;
`;

export const TechImage = styled.img`
  color: black;
  width: ${({ skills }) => (skills ? "80px" : "60px")};
  vertical-align: middle;
  display: inline-block;
  height: 60px;
  background: white;
  padding: 5px;
  margin: ${({ skills }) => (skills ? "10px 0px 10px 9px" : null)};

  @media screen and (max-width: 442px) {
    margin: ${({ skills }) => (skills ? "10px 17px 10px 17px" : null)};
  }

  @media screen and (max-width: 422px) {
    margin: ${({ skills }) => (skills ? "10px 12px 10px 12px" : null)};
  }
`;
