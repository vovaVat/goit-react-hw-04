import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ onSubmit }) {
  return (
    <header className={style.head}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const inp = event.target.search.value.trim();
          if (inp) {
            onSubmit(inp);
          } else {
            toast.error("Write something");
          }
          event.target.search.value = "";
        }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className={style.inputWrapper}>
          <button type="submit" className={style.searchButton}>
            <IoSearch />
          </button>
          <input
            type="text"
            name="search"
            placeholder="Search images and photos"
            className={style.searchInput}
          />
        </div>
      </form>
    </header>
  );
}
