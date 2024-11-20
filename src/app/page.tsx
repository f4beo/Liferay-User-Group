import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header/page";
import Aside from "../../components/MainPage/aside/page";
import Main from "../../components/MainPage/main/page";
import { Card } from "../../components/MainPage/card/page";
import { meetup } from "../data/meetup";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles["main-content"]}>
        <div className={styles.aside}>
          <Aside>
            {meetup.map((item, index) => {
              return <Card key={index} meetup={item} />;
            })}
          </Aside>
        </div>
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </div>
  );
}
