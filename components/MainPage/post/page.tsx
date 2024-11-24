import styles from "./post.module.css";
import { PostContent } from "@/data/posts";

interface PostProps {
  post: PostContent;
}
export default function Post({ post }: PostProps) {
  return (
    <li className={styles.post}>
      <div className={styles["post-wrapper"]}>
        <header className={styles["post-header"]}>
          <div className={styles["post-author"]}>
            {/* <img
              src={post.author.profilePic}
              alt=""
              className={styles["profile-pic"]}
              width={30}
            /> */}
            {/* <span className={styles.username}>{post.author.username}</span> */}
            {/* <span>Hora</span> */}
          </div>
          {/* <div>
          Seguir e mais
        </div> */}
        </header>
        <div className={styles["post-content-container"]}>
          <h3 className={styles["post-title"]}>{post.title}</h3>
          <p className={styles["post-content"]}>{post.content}</p>
        </div>
        <div className={styles["post-stats"]}>
          <span>like</span>
          <span>comment</span>
        </div>
      </div>
    </li>
  );
}
