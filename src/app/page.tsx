"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header/page";
import Aside from "../../components/MainPage/aside/page";
import Main from "../../components/MainPage/main/page";
import { Card } from "../../components/MainPage/card/page";
import { CardMeetup } from "../data/meetup";
import { useState } from "react";
import Modal from "../../components/MainPage/modal/page";
import CardDetails from "../../components/MainPage/cardDetails/page";
import useFetch from "@/useFetch";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<CardMeetup | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const { data: meetup, isLoading, error } = useFetch<CardMeetup[]>("http://localhost:8000/meetup");
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
      <Header onSearch={(value) => setSearch(value)} />
      <div className={styles["main-content"]}>
        <div className={styles.aside}>
          {isLoading && <div>Loading...</div>}
          {meetup && (
            <Aside>
              {meetup
                .filter((item) => {
                  return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((item) => {
                  return <Card key={item.id} meetup={item} onClick={() => handleCardClick(item)} />;
                })}
            </Aside>
          )}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedCard && <CardDetails meetup={selectedCard} onClose={closeModal} />}
          </Modal>
        </div>
        <div className={styles.main}>
          <Main searchQuery={search} />
        </div>
      </div>
    </div>
  );
}
