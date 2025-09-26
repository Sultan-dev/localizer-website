import { useTranslation } from "react-i18next";
import Logo from "../../assets/Common/Logo.png";
import veactor4 from "../../assets/Footer/Shape.png";
import Item from "./Components/item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Helper/MenuColmuns";

const FooterComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#002115]" dir={i18n.language === "ar" ? "ltr" : "rtl"}>
      <div className="flex justify-center items-center">
        <div className="mt-10 flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Item Links={SUPPORT} title={t("footer.header4")} />
            <Item Links={COMPANY} title={t("footer.header3")} />
            <Item Links={RESOURCES} title={t("footer.header2")} />
            <Item Links={PRODUCTS} title={t("footer.header1")} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[70%] flex justify-between items-center">
          <div className="text-[#FFFFFF] opacity-50 mb-24">
            {t("footer.copy")} <span className="font-mono">2025</span>
          </div>
          <div className="text-white mb-30">
            <img src={Logo} className="w-36" />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={veactor4}
          alt="Decorative Line Bottom Left"
          className="absolute bottom-10 -left-4 w-2/3 max-w-sm pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FooterComponent;
