import React from 'react';
import Header from '../../components/header/page';
import Content from '../../components/content/content';
import Chat from '../../components/chat/chat';
import 'src\app\globals.css';

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
