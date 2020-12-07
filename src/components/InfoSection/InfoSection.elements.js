import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 265px 0;
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
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
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
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Tech = styled.div`
  color: black;
  margin-right: 7px;
  margin-bottom: 5px;
`;

export const TechImage = styled.img`
  color: black;
  width: 60px;
  vertical-align: middle;
  display: inline-block;
  height: 60px;
  background: white;
  padding: 5px;
`;
