import React from "react";
import { Container, Button } from "../../globalStyles";
import { FaGithub, FaFilePdf, FaYoutube } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { AiOutlineFileZip } from "react-icons/ai";

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
  logoName,
  logoName2,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
}) {
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
                  <TechWrapper>
                    {!img1 ? null : (
                      <Tech>
                        <TechImage src={img1} alt={alt} />
                      </Tech>
                    )}
                    {!img2 ? null : (
                      <Tech>
                        <TechImage src={img2} alt={alt} />
                      </Tech>
                    )}
                    {!img3 ? null : (
                      <Tech>
                        <TechImage src={img3} alt={alt} />
                      </Tech>
                    )}
                    {!img4 ? null : (
                      <Tech>
                        <TechImage src={img4} alt={alt} />
                      </Tech>
                    )}
                    {!img5 ? null : (
                      <Tech>
                        <TechImage src={img5} alt={alt} />
                      </Tech>
                    )}
                    {!img6 ? null : (
                      <Tech>
                        <TechImage src={img6} alt={alt} />
                      </Tech>
                    )}
                    {!img7 ? null : (
                      <Tech>
                        <TechImage src={img7} alt={alt} />
                      </Tech>
                    )}
                    {!img8 ? null : (
                      <Tech>
                        <TechImage src={img8} alt={alt} />
                      </Tech>
                    )}
                  </TechWrapper>
                )}
                <a href={btnLink1} target="_blank" aria-label="GitHub">
                  <Button fontBig primary>
                    <ButtonItems>
                      <ButtonItem>
                        {logoName == "Github" ? <FaGithub /> : null}
                        {logoName == "Resume" ? <FaFilePdf /> : null}
                        {logoName == "Azure" ? <SiAzuredevops /> : null}
                        {logoName == "Youtube" ? <FaYoutube /> : null}
                        {logoName == "Zip" ? <AiOutlineFileZip /> : null}
                      </ButtonItem>
                      <ButtonItem>{buttonLabel}</ButtonItem>
                    </ButtonItems>
                  </Button>
                </a>
                {!extraBtn ? null : (
                  <a href={btnLink2} target="_blank" aria-label="GitHub">
                    <Button fontBig primary>
                      <ButtonItems>
                        <ButtonItem>
                          {logoName2 == "Github" ? <FaGithub /> : null}
                          {logoName2 == "Resume" ? <FaFilePdf /> : null}
                          {logoName2 == "Azure" ? <SiAzuredevops /> : null}
                          {logoName2 == "Youtube" ? <FaYoutube /> : null}
                          {logoName2 == "Zip" ? <AiOutlineFileZip /> : null}
                        </ButtonItem>
                        <ButtonItem>{buttonLabel2}</ButtonItem>
                      </ButtonItems>
                    </Button>
                  </a>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
