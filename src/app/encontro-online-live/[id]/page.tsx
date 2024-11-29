"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../../components/header/page";
import Content from "../../../../components/EncontroOnline/content/content";
import Chat from "../../../../components/EncontroOnline/chat/chat";
import styles from "./encontro-online-live.module.css";
import { CardMeetup } from "@/data/meetup";

interface Props {
  params: {
    id: number | string;
  };
}

const App = ({ params }: Props) => {
  const [meetup, setMeetup] = useState<CardMeetup | null>(null);

  useEffect(function getElement() {
    fetch("http://localhost:8000/meetup/" + params.id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setMeetup(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header onSearch={() => {}} />
      <div className={styles.contentWrapper}>
        {meetup && <Content meetup={meetup} />}
        <Chat />
      </div>
    </div>
  );
};

export default App;
