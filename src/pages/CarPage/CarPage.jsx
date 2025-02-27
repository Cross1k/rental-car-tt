import CarCommonInfo from "../../components/CarCommonInfo/CarCommonInfo.jsx";
import CarDetailInfo from "../../components/CarDetailInfo/CarDetailInfo.jsx";
import CarImages from "../../components/CarImages/CarImages.jsx";
import RenterForm from "../../components/RenterForm/RenterForm.jsx";

const CarPage = () => {
  return (
    <>
      <CarImages />
      <CarCommonInfo />
      <RenterForm />
      <CarDetailInfo />
    </>
  );
};

export default CarPage;
