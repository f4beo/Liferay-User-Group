import Image from "next/image";
import styles from "./header.module.css";
import slack from "../../public/images/header/slack.webp"
import profilepic from "../../public/images/header/perfil.webp"
import notif from "../../public/images/header/notificacao.webp"
import filter from "../../public/images/header/filter.svg"
import magglass from "../../public/images/header/search.webp"
const Header = () =>{
    return <>
    <div className={ styles.container }>
        <header className={styles.header}>
                <h1 className={styles.title}>Liferay User Group</h1>

                <div className={styles["search-bar"]}>		
                    <button className={styles["search-bar-icon"]}>
                        <Image 
                            src={filter}
                            alt="Filtros"
                            width={20}
                            height={20}
                        />
                    </button>
                    <input id="search" type="text" className={styles["search-element"]} placeholder="Pesquisar"/>
                    <button className={styles["search-button"]}>
                        <Image 
                            src={magglass}
                            alt="Pesquisar"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>

                <div className={styles["header-elements"]}>
                    <ul className={styles["header-elements-container"]}>
                        <li className={styles["header-elements-icon"]}>
                            <button className={styles["header-elements-button"]}>
                                <Image 
                                    src={slack}
                                    alt="Slack"
                                    width= {40}
                                    height={40}
                                />
                            </button>
                        </li>
                        <li className={styles["header-elements-icon"]}>
                            <button className={styles["header-elements-button"]}>
                            <Image 
                                    src={notif}
                                    alt="Notificações"
                                    width= {40}
                                    height={40}
                                />
                            </button>
                        </li>
                        <li className={styles["header-elements-icon"]}>
                            <button className={styles["header-elements-button"]}>
                            <Image 
                                    src={profilepic}
                                    alt="Perfil"
                                    width= {40}
                                    height={40}
                                />
                            </button>
                        </li>
                    </ul>
                </div>
        </header>
    </div>

    <div className={styles["header-margin-bottom"]}></div>
    </>
    
}

export default Header;