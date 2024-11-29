import styles from "./postOpions.module.css";

interface PostOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}
const PostOptionsModal = ({ isOpen, onClose, onDelete }: PostOptionsProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <ul className={styles["options-list"]}>
        <li className={styles.option}>
          <button onClick={onDelete}>Deletar</button>
        </li>
        {/* <li className={styles.option}>
          <button>Editar</button>
        </li> */}
      </ul>
    </div>
  );
};

export default PostOptionsModal;
