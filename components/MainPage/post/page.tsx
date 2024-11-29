import styles from "./post.module.css";
import { PostContent } from "@/data/posts";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { PiThumbsUpDuotone, PiThumbsUpFill } from "react-icons/pi";
import PostOptionsModal from "./postOptions/page";
interface PostProps {
  post: PostContent;
  onDeletePost: (id: string | number) => void;
}
export default function Post({ post, onDeletePost }: PostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    onDeletePost(post.id);
  };
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
            <span className={styles.username}>John Doe</span>
            {/* <span>Hora</span> */}
          </div>
          <button className={styles.ellipsis} onClick={handleToggleModal}>
            <FaEllipsisVertical size={20} />
          </button>
          <PostOptionsModal isOpen={isOpen} onClose={handleToggleModal} onDelete={handleDelete} />
          {/* <div>
          Seguir e mais
        </div> */}
        </header>
        <div className={styles["post-content-container"]}>
          <h3 className={styles["post-title"]}>{post.title}</h3>
          <p className={styles["post-content"]}>{post.content}</p>
        </div>
        <div className={styles["post-stats"]} onClick={() => setIsLiked(!isLiked)}>
          {!isLiked && <PiThumbsUpDuotone size={20} />}
          {isLiked && <PiThumbsUpFill size={20} />}
        </div>
      </div>
    </li>
  );
}
