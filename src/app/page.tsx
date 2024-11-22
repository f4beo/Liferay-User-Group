"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header/page";
import Aside from "../../components/MainPage/aside/page";
import Main from "../../components/MainPage/main/page";
import { Card } from "../../components/MainPage/card/page";
import { CardMeetup, meetup } from "../data/meetup";
import { useState } from "react";
import Modal from "../../components/MainPage/modal/page";
import CardDetails from "../../components/MainPage/cardDetails/page";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<CardMeetup | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (card: CardMeetup) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    // console.info(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles["main-content"]}>
        <div className={styles.aside}>
          <Aside>
            {meetup.map((item, index) => {
              return (
                <Card
                  key={index}
                  meetup={item}
                  onClick={() => handleCardClick(item)}
                />
              );
            })}

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              {selectedCard && (
                <CardDetails meetup={selectedCard} onClose={closeModal} />
              )}
            </Modal>
          </Aside>
        </div>
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </div>
  );
}
