import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import { Box } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ALMA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Box
          m={"5% 10%"}
          w={"80%"}
          bg={"#e0e0e0"}
          fontFamily={"en-maru-gothic"}
          fontSize={"20px"}
          fontWeight={700}
        >
          <p>🚨 基本的には個人利用を目的としております。</p>
          <p>👉 これよく使うなーというモノをメモ感覚でのせております。</p>
          <p>
            👉
            利用したいタイトルをクリックすることでコード等が展開し、表示されます。
            <br />
            コピー又はダウンロードの上ご利用ください。
          </p>
          <p>
            👉 コードにカーソルを合わせると右上にコピーボタンが表示されます。
          </p>
          <p>
            👉
            ツールをご利用の場合、参照先サイトの利用規約等をご理解の上でご利用ください。
          </p>
          <p>
            どうでもいいですが<span>「ALMA」=「ALL MASTER」</span>です。
          </p>
        </Box>
      </PageLayout>
    </>
  );
}
