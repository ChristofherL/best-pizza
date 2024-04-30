import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { X } from "lucide-react";

type ModalProps = {
  title?: string;
  isOpen?: boolean;
  children: ReactNode;
  handleCloseModal: () => void;
};

export function Modal({ isOpen, title, children, handleCloseModal }: ModalProps) {
  return (
    isOpen && (
      <div className={styles.modal}>
        <div>
          <header>
            <strong>{title}</strong>
            <X
              size={20}
              onClick={handleCloseModal}
            />
          </header>
          {children}
        </div>
      </div>
    )
  );
}
