import ImageCard from "./ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ resultList, onImageClick }) {
  return (
    <ul className={style.list}>
      {resultList.map((elem) => {
        return (
          <li key={elem.id}>
            <ImageCard
              src={elem.urls.small}
              alt={elem.alt_description}
              elem={elem}
              onImageClick={onImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
}
