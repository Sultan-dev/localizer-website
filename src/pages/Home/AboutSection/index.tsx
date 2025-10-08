import { useTranslation } from "react-i18next";
import { ImageSlider } from "../SliderSection";

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex justify-center items-center"
      dir={i18n.language === "en" ? "rtl" : "ltr"}
    >
      <div
        className={`py-12 px-4 w-[90%] flex flex-col-reverse md:flex-row items-center justify-between gap-6 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className="flex-1">
          <ImageSlider />
        </div>
        <div className="flex-1 space-y-4">
          <h2
            className={`text-4xl font-bold ${
              i18n.language === "ar" ? "font-hsn-sara" : ""
            } text-gray-800 mb-8`}
          >
            {t("about.title")}
          </h2>
          <p
            className={`text-gray-700 text-lg leading-loose ${
              i18n.language === "ar" ? "font-hsn-sara" : ""
            }`}
          >
            {t("about.content")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
