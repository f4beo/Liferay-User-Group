import styles from "./main.module.css";
const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles["post-container"]}>
        <h2 className={styles.title}>Postagens</h2>
        <ul className={`${styles["post-list"]} hide-scroll`}>
          <li className={styles.post}>
            <div className={styles["post-wrapper"]}>
              <header className={styles["post-header"]}>
                <div className={styles["post-author"]}>
                  <img src="/" alt="" className={styles["profile-pic"]} />
                  <span className={styles.username}>Nome do autor</span>
                  {/* <span>Hora</span> */}
                </div>
                {/* <div>
                  Seguir e mais
                </div> */}
              </header>
              <div className={styles["post-content-container"]}>
                <h3 className={styles["post-title"]}>Título do post</h3>
                <p className={styles["post-content"]}>
                  Conteudo do post: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatum sunt quos illo, sed sit
                  aspernatur ullam perferendis quidem excepturi delectus iusto
                  architecto suscipit tempora porro dignissimos atque hic
                  voluptates fugiat. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error, quod! Similique, doloribus veritatis
                  laudantium eaque repellat saepe perspiciatis numquam veniam
                  nulla rem. Odio exercitationem voluptatibus minus earum ex
                  delectus blanditiis.lorem Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Harum amet ullam rem fuga porro
                  ducimus. Quas recusandae nesciunt, eveniet alias odio at quod
                  ea obcaecati voluptate possimus quo consectetur aspernatur!
                </p>
              </div>
              <div className={styles["post-stats"]}>
                <span>like</span>
                <span>comment</span>
              </div>
            </div>
          </li>
          <li className={styles.post}>
            <div className={styles["post-wrapper"]}>
              <header className={styles["post-header"]}>
                <div className={styles["post-author"]}>
                  <img src="/" alt="" className={styles["profile-pic"]} />
                  <span className={styles.username}>Nome do autor</span>
                  {/* <span>Hora</span> */}
                </div>
                {/* <div>
                  Seguir e mais
                </div> */}
              </header>
              <div className={styles["post-content-container"]}>
                <h3 className={styles["post-title"]}>Título do post</h3>
                <p className={styles["post-content"]}>
                  Conteudo do post: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatum sunt quos illo, sed sit
                  aspernatur ullam perferendis quidem excepturi delectus iusto
                  architecto suscipit tempora porro dignissimos atque hic
                  voluptates fugiat. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error, quod! Similique, doloribus veritatis
                  laudantium eaque repellat saepe perspiciatis numquam veniam
                  nulla rem. Odio exercitationem voluptatibus minus earum ex
                  delectus blanditiis.lorem Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Harum amet ullam rem fuga porro
                  ducimus. Quas recusandae nesciunt, eveniet alias odio at quod
                  ea obcaecati voluptate possimus quo consectetur aspernatur!
                </p>
              </div>
              <div className={styles["post-stats"]}>
                <span>like</span>
                <span>comment</span>
              </div>
            </div>
          </li>
          <li className={styles.post}>
            <div className={styles["post-wrapper"]}>
              <header className={styles["post-header"]}>
                <div className={styles["post-author"]}>
                  <img src="/" alt="" className={styles["profile-pic"]} />
                  <span className={styles.username}>Nome do autor</span>
                  {/* <span>Hora</span> */}
                </div>
                {/* <div>
                  Seguir e mais
                </div> */}
              </header>
              <div className={styles["post-content-container"]}>
                <h3 className={styles["post-title"]}>Título do post</h3>
                <p className={styles["post-content"]}>
                  Conteudo do post: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatum sunt quos illo, sed sit
                  aspernatur ullam perferendis quidem excepturi delectus iusto
                  architecto suscipit tempora porro dignissimos atque hic
                  voluptates fugiat. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error, quod! Similique, doloribus veritatis
                  laudantium eaque repellat saepe perspiciatis numquam veniam
                  nulla rem. Odio exercitationem voluptatibus minus earum ex
                  delectus blanditiis.lorem Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Harum amet ullam rem fuga porro
                  ducimus. Quas recusandae nesciunt, eveniet alias odio at quod
                  ea obcaecati voluptate possimus quo consectetur aspernatur!
                </p>
              </div>
              <div className={styles["post-stats"]}>
                <span>like</span>
                <span>comment</span>
              </div>
            </div>
          </li>
          <li className={styles.post}>
            <div className={styles["post-wrapper"]}>
              <header className={styles["post-header"]}>
                <div className={styles["post-author"]}>
                  <img src="/" alt="" className={styles["profile-pic"]} />
                  <span className={styles.username}>Nome do autor</span>
                  {/* <span>Hora</span> */}
                </div>
                {/* <div>
                  Seguir e mais
                </div> */}
              </header>
              <div className={styles["post-content-container"]}>
                <h3 className={styles["post-title"]}>Título do post</h3>
                <p className={styles["post-content"]}>
                  Conteudo do post: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatum sunt quos illo, sed sit
                  aspernatur ullam perferendis quidem excepturi delectus iusto
                  architecto suscipit tempora porro dignissimos atque hic
                  voluptates fugiat. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error, quod! Similique, doloribus veritatis
                  laudantium eaque repellat saepe perspiciatis numquam veniam
                  nulla rem. Odio exercitationem voluptatibus minus earum ex
                  delectus blanditiis.lorem Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Harum amet ullam rem fuga porro
                  ducimus. Quas recusandae nesciunt, eveniet alias odio at quod
                  ea obcaecati voluptate possimus quo consectetur aspernatur!
                </p>
              </div>
              <div className={styles["post-stats"]}>
                <span>like</span>
                <span>comment</span>
              </div>
            </div>
          </li>
          <li className={styles["post-margin-bottom"]}></li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
