import React, { useState, useEffect } from "react";
import { Container, Button } from "../../globalStyles";
import ReactTooltip from "react-tooltip";
import Youtube from "react-youtube";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  Subtitle3,
  ImgWrapper,
  Img,
  ContainerHeader,
  ButtonItems,
  ButtonItem,
  TechWrapper,
  Tech,
  TechImage,
} from "./InfoSection.elements";

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
  internalLink,
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
    height: "380",
    width: "400",
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
                {!extraBtn ? null : internalLink ? (
                  <Link to="./DataViz">
                    <Button fontBig primary>
                      <ButtonItems>
                        <ButtonItem>{Icon2}</ButtonItem>
                        <ButtonItem>{buttonLabel2}</ButtonItem>
                      </ButtonItems>
                    </Button>
                  </Link>
                ) : (
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
