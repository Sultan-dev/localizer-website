// import router from "../../routes/App.routes";
// import { RouterProvider } from "react-router-dom";
import "../../localization";
import "../../theme/index.css";
import LanguageProvider from "../Language";
import AppPage from "../../pages/Home/index";
import Navbar from "../../layout/Navbar";
import FooterComponent from "../../layout/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <AppPage />
      <FooterComponent />
      {/* <RouterProvider router={router} /> */}
    </LanguageProvider>
  );
};

export default App;
