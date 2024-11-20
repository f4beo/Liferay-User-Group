import Image from "next/image";
import style from "./card.module.css";
import { CardMeetup } from "../../src/data/meetup";

export function Card({ meetup }: { meetup: CardMeetup }) {
  return (
    <li className={style["wrapper"]}>
      <div className={style.info}>
        <img src={meetup.banner} alt="" className={style["banner"]} />
        <span className={style["title"]}>{meetup.title}</span>
      </div>
      <div className={style.interaction}>
        {meetup.tags && meetup.tags.length > 0 && (
          <div className={style.tags}>
            {meetup.tags.map((tag, index) => (
              <span key={index} className={style.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
