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
      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>Descrição</h3>
        <p className={styles.descriptionText}>
          Ao longo do último ano, muitas novidades chegaram à Busca no Liferay. Vamos explorar as novas funcionalidades, do básico ao avançado. Este é o seu guia para explorar ao máximo as capacidades de Busca presentes nativamente no Liferay.
          <br/>
          E para isso, vamos receber uma dupla de palestrantes. Stephane Miranda e Davi Costa mostrarão de forma prática como extrair mais valor da Busca. Este é um componente fundamental do Liferay DXP. A pesquisa potencializa os resultados de pesquisa para seus sites, mas também pode ser personalizada e configurada para fazer muito mais!
          <br/>
          Use a Pesquisa para criar menus de navegação dinâmicos com base em categorias, aumentar os resultados da pesquisa para conteúdo importante ou usá-la para apresentar uma experiência de conteúdo dinâmica aos usuários.
        </p>
      </div>
    </div>
  );
};

export default Content;