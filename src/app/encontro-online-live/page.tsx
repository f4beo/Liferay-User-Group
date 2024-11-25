"use client";  // Mantém a diretiva no Next.js

import React from 'react';
import Header from '../../../components/header/page';
import Content from '../../../components/EncontroOnline/content/content';
import Chat from '../../../components/EncontroOnline/chat/chat';
import styles from './encontro-online-live.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentWrapper}>
        <Content />
        <Chat />
      </div>
    </div>
  );
};

export default App;