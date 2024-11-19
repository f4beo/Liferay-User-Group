import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header/page";
import Aside from "../../components/aside/page";
import Main from "../../components/main/page"

export default function Home() {
  return (
    <div className={styles.page}>
        <Header />
        <div className={styles["main-content"]}>
          <div className={styles.aside}>
          <Aside />
          </div>
          <div className={styles.main}>
          <Main />
          </div>
        </div>
    </div>
  );
}
