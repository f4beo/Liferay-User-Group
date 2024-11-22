import React, { useState } from 'react';
import styles from './Chat.module.css';

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o comentário
    console.log(message);
    setMessage('');
  };

  return (
    <div className={styles.meetupChat}>
      <div className={styles.chatHeader}>
        <h3>Meetup Chat</h3>
        <img src="../img/Encontro online/ver-mais.png" alt="Ver mais" className={styles.viewMoreIcon} />
      </div>
      <div className={styles.chatBox}>
        <p><strong>@João_Silva:</strong> Acho que o sistema de busca poderia ter mais filtros, como data e relevância...</p>
        <p><strong>@Maria_Ferreira:</strong> Concordo! Também seria útil se a busca conseguisse entender sinônimos...</p>
        {/* Adicione mais mensagens conforme necessário */}
      </div>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Comentar" 
          value={message} 
          onChange={handleMessageChange} 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
