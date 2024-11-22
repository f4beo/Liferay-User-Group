import { CardMeetup } from "@/data/meetup";
import styles from "./cardDetails.module.css";

interface CardDetailsProps {
  meetup: CardMeetup;
  onClose?: () => void;
}

export default function CardDetails({ meetup, onClose }: CardDetailsProps) {
  return (
    <div className={styles.container}>
      <img src={meetup.banner} alt="" className={styles["banner"]} />

      <div className={styles["meetup-title"]}>
        <h3 className={styles.title}>{meetup.title}</h3>
        {meetup.id && (
          <span className={styles["meetup-id"]}>Meetup #{meetup.id}</span>
        )}
      </div>
      <div className={styles["meetup-info"]}>
        <div className={styles["speakers"]}>
          <span>Palestrantes: </span>
          {meetup.palestrantes.map((item, index) => {
            return (
              <div key={index} className={styles["speaker"]}>
                <span className={styles["speaker-name"]}>{item.nome}</span>
                <span className={styles["speaker-desc"]}>{item.desc}</span>
              </div>
            );
          })}
        </div>

        <div className={styles["date-time"]}>
          {meetup.data && <span>Data :{meetup.data} </span>}
          {meetup.hora && <span>Hora :{meetup.hora} </span>}
        </div>
      </div>
    </div>
  );
}
