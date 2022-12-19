import Head from "next/head";
import styled from "styled-components";
import BasicBeastStarterPack from "../components/BasicBeastStarterPack";
import ClaimButton from "../components/ClaimButton";
import CursedBlackPack from "../components/CursedBlackPack";
import Header from "../components/Header";
import MyInbox from "../components/MyInbox";
import ShinyGold from "../components/ShinyGold";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/b2e75c336df191233b3096682c9ee6be?family=PixelarRegularW01-Regular"
          rel="stylesheet"
          type="text/css"
        />
        <title>The Case</title>
        <link rel="icon" href="/favion.ico" />
      </Head>
      <Header />
      <MyInbox />
      <main>
        <BasicBeastStarterPack />
        <CursedBlackPack />
        <ShinyGold />
        <ClaimButton />
      </main>
    </div>
  );
}
