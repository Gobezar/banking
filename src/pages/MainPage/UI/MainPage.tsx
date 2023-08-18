import DataForm from "../../../components/DataForm/UI/DataForm";
import cl from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={cl.mainPageWrapper}>
      <DataForm />
    </div>
  );
};

export default MainPage;
