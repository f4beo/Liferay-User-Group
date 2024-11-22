import React from 'react';
import Header from '../../components/header/page';
import Content from '../../components/EncontroOnline/content/content';
import Chat from '../../components/EncontroOnline/chat/chat';
import '../';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Chat />
    </div>
  );
};

export default App;
