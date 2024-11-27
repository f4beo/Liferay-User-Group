import styles from "./main.module.css";
import { useState } from "react";
import useFetch from "@/useFetch";
import Post from "../post/page";
import { PostContent } from "@/data/posts";
import Modal from "../modal/page";
import CreatePost from "../createPost/createPost";

interface MainProps {
  searchQuery: string;
}

const Main = ({ searchQuery }: MainProps) => {
  const { data: posts, isLoading, error } = useFetch<PostContent[]>("http://localhost:8000/posts");

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
            {posts
              .filter((item) => {
                return searchQuery.toLowerCase() === null || searchQuery.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchQuery.toLowerCase());
              })
              .map((item) => {
                return <Post key={item.id} post={item} />;
              })}
          </ul>
        )}
      </div>
      <button className={styles["btn-create-post"]} onClick={handleToggleModal}>
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <CreatePost onSubmit={handleToggleModal} />
      </Modal>
    </main>
  );
};

export default Main;
