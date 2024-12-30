import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <ThreeDots
        wrapperClass={style.load}
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
      />
    </>
  );
}
