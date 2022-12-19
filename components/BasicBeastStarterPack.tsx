import Image from "next/image";
import styled from "styled-components";
import mypic from "../public/Pictures/starter.png";

export const CustomDiv2 = styled.div`
  display: inline-block;
  margin: 5rem 2rem 2rem;
  line-height: 0.8;
`;

export const CustomDiv = styled.div`
  text-align: left;
  margin: 0 20rem 0;
  border-bottom-width: 1px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-color: #353946;
  padding: 0 0 0;
`;

export const ImageDiv = styled.div`
  display: inline-block;
`;

export const PackTitle = styled.h1`
  color: White;
  font-size: 1rem;
`;

export const PackMessage1 = styled.h1`
  color: #8a919c;
  font-size: 1rem;
`;
export const PackMessage = styled.h1`
  color: #3d4147;
  font-size: 1rem;
`;

function GetBasicBeastStarterPackCount(count) {
  count = 4;
  if (count) {
    return count;
  } else {
    return 0;
  }
}

function BasicBeastStarterPack({ count }) {
  return (
    <CustomDiv>
      <ImageDiv>
        <Image src={mypic} alt="" width={100} height={100} />
      </ImageDiv>
      <CustomDiv2>
        <PackTitle>
          You received {GetBasicBeastStarterPackCount(count)} new packs
        </PackTitle>
        <PackMessage1>Basic beast starter pack</PackMessage1>
        <PackMessage>USD $40.00</PackMessage>
      </CustomDiv2>
    </CustomDiv>
  );
}

export default BasicBeastStarterPack;
