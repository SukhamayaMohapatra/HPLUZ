import Image from "next/image";
import styles from "./page.module.css";
import Page from "./components/Header/Page";
import FotterPage from "./components/Fotter/FotterPage";
import LayoutPage from "./components/Layout/LayoutPage";

export default function Home() {
  return (
    <>
      <Page />
      <LayoutPage />
      <FotterPage />
    </>
  );
}
