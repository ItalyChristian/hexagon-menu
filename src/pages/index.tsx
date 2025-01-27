import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { HexList } from "@/components/HexMenu";

export default function Home() {

  const title = "THE ERAS TOUR (2023 - 2024)";

  const menuList = [
    {
      id: 1,
      title: "FOLKLORE",
      link: "https://open.spotify.com/intl-pt/album/1pzvBxYgT6OVwJLtHkrdQK?si=cbbda692b9ca4757",
    },
    {
      id: 2,
      title: "EVERMORE",
      link: "https://open.spotify.com/intl-pt/album/6AORtDjduMM3bupSWzbTSG?si=ba3156fb9e19426f",
    },
    {
      id: 3,
      title: "REPUTATION",
      link: "https://open.spotify.com/intl-pt/album/6DEjYFkNZh67HP7R9PSZvv?si=51e3bae9b0664c47",
    },
    {
      id: 4,
      title: "SPEAK NOW",
      link: "https://open.spotify.com/intl-pt/album/5AEDGbliTTfjOB8TSm1sxt?si=7ed83535d69449f8",
    },
    {
      id: 5,
      title: "THE TORTURED POETS DEPARTMENT",
      link: "https://open.spotify.com/intl-pt/album/5H7ixXZfsNMGbIE5OBSpcb?si=phMNqJKjQb6h7PTsUksxYg",
    },
    {
      id: 6,
      title: "RED",
      link: "https://open.spotify.com/intl-pt/album/6kZ42qRrzov54LcAk4onW9?si=de8ea70bad1e49bb",
    }
  ];

  return (
    <>
      <Head>
        <title>Nome do Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className={styles.main}>
        <HexList menuList={menuList} title={title} subtitle="Taylor Swift"/>
        {/* NOTA: As propriedades "title" e "subtitle" são do tipo "string", 
          e por isso podem ser passadas para o componente de ambas as formas 
        (como está sendo feito aqui) */}
      </div>
    </>
  );
}
