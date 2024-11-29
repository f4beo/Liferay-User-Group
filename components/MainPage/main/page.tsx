import styles from "./main.module.css";
import { useState } from "react";
import useFetch from "@/useFetch";
import { PostContent } from "@/data/posts";
import { FaPlus } from "react-icons/fa6";
import Post from "../post/page";
import Modal from "../modal/page";
import CreatePost from "../createPost/createPost";

interface MainProps {
  searchQuery: string;
}

const Main = ({ searchQuery }: MainProps) => {
  const { data: posts, isLoading, error, setData: setPosts } = useFetch<PostContent[]>("http://localhost:8000/posts");

  //  modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //  /modal

  // PostList

  //DELETE
  const handleDelete = (id: number | string) => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } else {
          throw new Error(`Erro ao deletar o post: ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error("Erro na requisição DELETE:", error);
      });
  };

  //ADD
  const handleAddPost = (title: string, content: string) => {
    const post = { title, content };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Erro ao adicionar o post");
        }
        return resp.json();
      })
      .then((createdPost) => {
        setPosts((prevPosts) => [...(prevPosts || []), createdPost]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // /PostList

  return (
    <main className={styles.container}>
      <div className={styles["post-container"]}>
        <h2 className={styles.title}>Postagens</h2>

        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}

        {/* PostList */}
        {posts && (
          <ul className={`${styles["post-list"]} hide-scroll`}>
            {posts
              .filter((item) => {
                return searchQuery.toLowerCase() === null || searchQuery.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchQuery.toLowerCase());
              })
              .map((item) => {
                return <Post key={item.id} post={item} onDeletePost={(postId) => handleDelete(postId)} />;
              })}
          </ul>
        )}
        {/* /PostList */}
      </div>
      <button className={styles["btn-create-post"]} onClick={handleToggleModal}>
        <FaPlus />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <CreatePost
          onSubmit={(title, content) => {
            handleToggleModal();
            handleAddPost(title, content);
          }}
        />
      </Modal>
    </main>
  );
};

export default Main;
