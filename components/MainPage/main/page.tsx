import useFetch from "@/useFetch";
import Post from "../post/page";
import styles from "./main.module.css";
import { PostContent } from "@/data/posts";
import Modal from "../modal/page";
import { useState } from "react";
const Main = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostContent[]>("http://localhost:8000/posts");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <main className={styles.container}>
      <div className={styles["post-container"]}>
        <h2 className={styles.title}>Postagens</h2>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {posts && (
          <ul className={`${styles["post-list"]} hide-scroll`}>
            {posts.map((item) => {
              return <Post key={item.id} post={item} />;
            })}

            <li className={styles["post-margin-bottom"]}></li>
          </ul>
        )}
      </div>
      {/* <button className={styles["btn-create-post"]} onClick={handleToggleModal}>
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <div>oi</div>
      </Modal> */}
    </main>
  );
};

export default Main;
