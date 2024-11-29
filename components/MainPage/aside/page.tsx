import styles from "./aside.module.css";
export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className={styles.aside}>
      <div className={styles["aside-container"]}>
        <h2 className={styles.title}>Recentes</h2>
        <ul className={`${styles["meetup-container"]} hide-scroll`}>
          {children}
        </ul>
      </div>
    </aside>
  );
}
