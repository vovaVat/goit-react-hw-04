import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreButton from "./components/LoadMoreButton";
import ImageModal from "./components/ImageModal";

function App() {
  const [inp, setInp] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPages] = useState(0);
  const ACCESS_KEY = "8wSe26Bt4kGOKyc2olibwR4F1t4-6PNqlbaOx0Pz3kg";

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inp) {
      async function fetchInp() {
        setError(false);
        try {
          setLoading(true);
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: inp,
                page: page,
                per_page: 12,
                client_id: ACCESS_KEY,
              },
            }
          );
          setResult((prevResult) => [...prevResult, ...response.data.results]);
          console.log(response.data);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      fetchInp();
    }
  }, [inp, page]);

  const handleSubmit = (input) => {
    setInp(input);
    setPage(1);
    setResult([]);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (src, alt) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {result.length > 0 && (
        <ImageGallery resultList={result} onImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage />}
      {page < totalPage && <LoadMoreButton click={handleClick} />}
      {loading && <Loader />}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
