import style from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onImageClick, elem }) {
  return (
    <div className={style.galleryItem}>
      <img
        src={src}
        alt={alt}
        onClick={() => {
          onImageClick(elem.urls.regular, elem.alt_description);
        }}
      />
    </div>
  );
}
