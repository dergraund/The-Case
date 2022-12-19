import Image from "next/image";
import styled from "styled-components";
import mypic from "../public/Pictures/shiny.png";
import {
  CustomDiv,
  ImageDiv,
  CustomDiv2,
  PackTitle,
  PackMessage,
  PackMessage1,
} from "./BasicBeastStarterPack";

function GetShinyGoldCount(count) {
  count = 1;
  if (count) {
    return count;
  } else {
    return 0;
  }
}

function ShinyGold({ count }) {
  return (
    <CustomDiv>
      <ImageDiv>
        <Image src={mypic} alt="" width={100} height={100} />
      </ImageDiv>
      <CustomDiv2>
        <PackTitle>You received {GetShinyGoldCount(count)} new packs</PackTitle>
        <PackMessage1>Shiny Gold</PackMessage1>
        <PackMessage>USD $999</PackMessage>
      </CustomDiv2>
    </CustomDiv>
  );
}

export default ShinyGold;
