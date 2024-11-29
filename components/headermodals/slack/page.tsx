import styles from "./slack.module.css";

interface SlackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlackModal = ({ isOpen, onClose }: SlackModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles["container-modal"]}>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.content}>
        <span className={styles.text}>Participe da nossa comunidade no slack</span>
        <a
          href="https://liferay-community.slack.com/join/shared_invite/zt-2qrjrge9d-Ex3aZNesXlNfgtRQjKnidQ#/shared-invite/email"
          className={styles["btn-slack"]}
        >
          Junte-se a nós
        </a>
        <span className={styles.text}>
          Participe de discussões em tempo real, compartilhe conhecimento e fique por dentro das novidades da nossa
          comunidade.
        </span>
      </div>
    </div>
  );
};

export default SlackModal;
