import React from 'react';
import styles from './Content.module.css';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <img src="/images/encontro online/meetup 1510.png" alt="" />
      </div>
      <h2 className={styles.meetupOnlineTitulo}>Novidades sobre Busca: do básico ao avançado, novos recursos</h2>
      <p className={styles.meetupId}>Meetup #37</p>
      <div className={styles.eventInfo}>
        <span className={styles.views}>59 <img src="/images/encontro online/olho.png" alt="" /></span>
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
    </div>
  );
};

export default Content;
