import CarsList from "../../components/CarsList/CarsList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

const CatalogPage = () => {
  return (
    <>
      <SearchBar />
      <CarsList />
      <LoadMoreBtn />
    </>
  );
};

export default CatalogPage;
