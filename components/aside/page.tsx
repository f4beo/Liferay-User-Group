import styles from "./aside.module.css"

const Aside = () =>{
    return <>
    <aside className={styles.aside}>
        <div className={styles["aside-container"]}>
            <h2 className={styles.title}>Recentes</h2>
            <ul className={styles["meetup-container"]}>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
                <li className={styles["meetup-wrapper"]}>
                    <div className={styles["meetup-thumbnail"]}></div>
                </li>
            </ul>
        </div>
    </aside>
    {/* <div className={styles.scroll}></div>
    <div className={styles.scroll}></div>
    <div className={styles.scroll}></div>
    <div className={styles.scroll}></div>
    <div className={styles.scroll}></div> */}
    </>
}

export default Aside;