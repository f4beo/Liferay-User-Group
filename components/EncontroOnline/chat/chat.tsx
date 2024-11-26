"use client";

import React from 'react';
import styles from './Chat.module.css';

const MeetupChat: React.FC = () => {
  return (
    <div className={styles.meetupChat}>
      <div className={styles.chatHeader}>
        <h3>Meetup Chat</h3>
        <img
          src="/images/Encontro online/ver-mais.png"
          alt="Ver mais"  
          className={styles.viewMoreIcon}
        />
      </div>
      <div className={styles.chatBox}>
        <p><strong>@João_Silva:</strong> Acho que o sistema de busca poderia ter mais filtros, como data e relevância...</p>
        <p><strong>@Maria_Ferreira:</strong> Concordo! Também seria útil se a busca conseguisse entender sinônimos...</p>
        <p><strong>@Lucas_Mendes:</strong> Alguém já testou a busca com grandes volumes de dados?</p>
        <p><strong>@Ana_Souza:</strong>Seria legal se os resultados fossem priorizados com base nas interações dos usuários, tipo o número de visualizações.</p>
        <p><strong>@Carlos_Augusto:</strong>Estou com dificuldade para encontrar tutoriais específicos, acho que a busca ainda precisa de ajustes no algoritmo.</p>
        <p><strong>@Fernanda_Lima:</strong>Vocês já pensaram em implementar busca por voz? Facilitaria para quem está em dispositivos móveis!</p>
      </div>
      <form className={styles.commentForm}>
        <input type="text" placeholder="Comentar" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default MeetupChat;