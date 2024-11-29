"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../../components/header/page";
import Content from "../../../../components/EncontroOnline/content/content";
import Chat from "../../../../components/EncontroOnline/chat/chat";
import styles from "./encontro-online-live.module.css";
import { CardMeetup } from "@/data/meetup";
import { useRouter } from "next/router";

const App = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const [meetup, setMeetup] = useState<CardMeetup | null>(null);

  useEffect(function getElement() {
    fetch("https://api-liferay.onrender.com/meetup/" + id)
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
