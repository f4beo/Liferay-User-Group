import Image from "next/image";
import styles from "./header.module.css";
import slack from "../../public/images/header/slack.webp";
import profilepic from "../../public/images/header/perfil.webp";
import filter from "../../public/images/header/filter.svg";
import magglass from "../../public/images/header/search.webp";
import { useState } from "react";
import SlackModal from "../headermodals/slack/page";
import Link from "next/link";

interface HeaderProps {
  onSearch: (value: string) => void; // Função passada como prop
}

const Header = ({ onSearch }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.title}>
            <h1 className={styles.title}>Liferay User Group</h1>
          </Link>
          <div className={styles["search-bar"]}>
            <button className={styles["search-bar-icon"]}>
              <Image src={filter} alt="Filtros" width={20} height={20} />
            </button>
            <input
              type="text"
              className={styles["search-element"]}
              placeholder="Pesquisar"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className={styles["search-button"]}>
              <Image src={magglass} alt="Pesquisar" width={20} height={20} />
            </button>
          </div>

          <div className={styles["header-elements"]}>
            <ul className={styles["header-elements-container"]}>
              <li className={styles["header-elements-icon"]}>
                <button className={styles["header-elements-button"]} onClick={handleToggleModal}>
                  <Image src={slack} alt="Slack" width={40} height={40} />
                </button>
                <SlackModal isOpen={isModalOpen} onClose={handleToggleModal} />
              </li>
              <li className={styles["header-elements-icon"]}>
                <button className={styles["header-elements-button"]}>
                  <Image src={profilepic} alt="Perfil" width={40} height={40} />
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>

      <div className={styles["header-margin-bottom"]}></div>
    </>
  );
};

export default Header;
