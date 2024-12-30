import style from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ click }) {
  return (
    <button className={style.button} onClick={click}>
      Load more
    </button>
  );
}
