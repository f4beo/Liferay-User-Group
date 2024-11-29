import { CardMeetup } from "@/data/meetup";
import styles from "./cardDetails.module.css";
import Link from "next/link";

interface CardDetailsProps {
  meetup: CardMeetup;
  onClose?: () => void;
}

export default function CardDetails({ meetup, onClose }: CardDetailsProps) {
  return (
    <div className={styles.container}>
      <div>
        <img src={meetup.banner} alt="" className={styles["banner"]} />

        <div className={styles["meetup-title"]}>
          <h3 className={styles.title}>{meetup.title}</h3>
          {meetup.number && <span className={styles["meetup-id"]}>Meetup #{meetup.number}</span>}
        </div>
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
      <Link href={"/encontro-online-live/" + meetup.id} className={styles["see-more"]}>
        <span>Ver Mais</span>
      </Link>
    </div>
  );
}
