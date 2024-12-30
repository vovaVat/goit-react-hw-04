import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");
export default function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className={style.modalOverlay}
    >
      <div className={style.modalBody} onClick={onRequestClose}>
        <img
          src={image.src}
          alt={image.alt}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </Modal>
  );
}
