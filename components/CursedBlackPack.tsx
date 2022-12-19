import Image from "next/image";
import styled from "styled-components";
import mypic from "../public/Pictures/cursed.png";
import {
  CustomDiv,
  ImageDiv,
  CustomDiv2,
  PackTitle,
  PackMessage,
  PackMessage1,
} from "./BasicBeastStarterPack";

function GetCursedBlackPackCount(count) {
  count = 2;
  if (count) {
    return count;
  } else {
    return 0;
  }
}

function CursedBlackPack({ count }) {
  return (
    <CustomDiv>
      <ImageDiv>
        <Image src={mypic} alt="" width={100} height={100} />
      </ImageDiv>
      <CustomDiv2>
        <PackTitle>
          You received {GetCursedBlackPackCount(count)} new packs
        </PackTitle>
        <PackMessage1>Cursed Black pack</PackMessage1>
        <PackMessage>USD $600.00</PackMessage>
      </CustomDiv2>
    </CustomDiv>
  );
}

export default CursedBlackPack;
