import React from "react";
import styles from "./Content.module.css";
import { CardMeetup } from "@/data/meetup";

interface ContentProps {
  meetup: CardMeetup;
}

const Content = ({ meetup }: ContentProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <img src={meetup.banner} alt="" />
      </div>
      <h2 className={styles.meetupOnlineTitulo}>{meetup.title}</h2>
      <p className={styles.meetupId}>Meetup #{meetup.id}</p>
      <div className={styles.eventInfo}>
        <span className={styles.views}>
          59 <img src="/images/encontro online/olho.png" alt="" />
        </span>
        <div className={styles.rating}>
          <img src="/images/encontro online/estrela-full.png" alt="" />
          <img src="/images/encontro online/estrela-full.png" alt="" />
          <img src="/images/encontro online/estrela-full.png" alt="" />
          <img src="/images/encontro online/estrela-full.png" alt="" />
          <img src="/images/encontro online/estrela.png" alt="" />
        </div>
        <button className={styles.shareButton}>Compartilhar</button>
      </div>
      <div className={styles.hostRating}></div>
      <div className={styles.host}>
        <h3>Hospedado por</h3>
        <div className={styles.hostInfo}>
          <img src="/images/encontro online/anne pic.jpeg" alt="Anne Durey" />
          <p>Anne Durey</p>
        </div>
      </div>
      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>Descrição</h3>
        <p className={styles.descriptionText}>{meetup.description}</p>
      </div>
    </div>
  );
};

export default Content;
