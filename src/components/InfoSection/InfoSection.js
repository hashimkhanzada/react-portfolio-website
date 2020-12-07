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
  Skills,
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
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
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
                  <TechWrapper skills={skills}>
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
                <a
                  href={btnLink1}
                  target="_blank"
                  aria-label="Logo"
                  download={download}
                  rel="noopener"
                >
                  <Button fontBig primary>
                    <ButtonItems>
                      <ButtonItem>
                        {logoName === "Github" ? <FaGithub /> : null}
                        {logoName === "Resume" ? <FaFilePdf /> : null}
                        {logoName === "Azure" ? <SiAzuredevops /> : null}
                        {logoName === "Youtube" ? <FaYoutube /> : null}
                        {logoName === "Zip" ? <AiOutlineFileZip /> : null}
                      </ButtonItem>
                      <ButtonItem>{buttonLabel}</ButtonItem>
                    </ButtonItems>
                  </Button>
                </a>
                {!extraBtn ? null : (
                  <a
                    href={btnLink2}
                    target="_blank"
                    aria-label="Logo"
                    rel="noopener"
                  >
                    <Button fontBig primary>
                      <ButtonItems>
                        <ButtonItem>
                          {logoName2 === "Github" ? <FaGithub /> : null}
                          {logoName2 === "Resume" ? <FaFilePdf /> : null}
                          {logoName2 === "Azure" ? <SiAzuredevops /> : null}
                          {logoName2 === "Youtube" ? <FaYoutube /> : null}
                          {logoName2 === "Zip" ? <AiOutlineFileZip /> : null}
                        </ButtonItem>
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
                  <Img src={img} alt={alt} />
                ) : (
                  <TechWrapper skills={skills}>
                    {!img1 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img1} alt={alt} />
                      </Tech>
                    )}
                    {!img2 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img2} alt={alt} />
                      </Tech>
                    )}
                    {!img3 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img3} alt={alt} />
                      </Tech>
                    )}
                    {!img4 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img4} alt={alt} />
                      </Tech>
                    )}
                    {!img5 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img5} alt={alt} />
                      </Tech>
                    )}
                    {!img6 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img6} alt={alt} />
                      </Tech>
                    )}
                    {!img7 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img7} alt={alt} />
                      </Tech>
                    )}
                    {!img8 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img8} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img9 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img9} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img10 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img10} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img11 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img11} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img12 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img12} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img13 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img13} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img14 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img14} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img15 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img15} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img16 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img16} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img17 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img17} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img18 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img18} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img19 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img19} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img20 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img20} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img21 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img21} alt={alt} />
                      </Tech>
                    )}
                    ,
                    {!img22 ? null : (
                      <Tech>
                        <TechImage skills={skills} src={img22} alt={alt} />
                      </Tech>
                    )}
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
