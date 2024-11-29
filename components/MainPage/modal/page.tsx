import { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles["modal-background"]} onClick={onClose}></div>
      <div className={styles["modal-content"]}>{children}</div>
    </div>
  );
}
