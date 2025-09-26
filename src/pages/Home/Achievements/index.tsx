import cup from "../../../assets/Achievemnets/cup.png";
import content from "../../../assets/Achievemnets/contentBg.png";
import { useTranslation } from "react-i18next";

const AchievementsSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="w-full flex justify-center items-center py-8 md:py-12 lg:py-16"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <div className="w-full px-4 max-w-7xl">
        <div className="rounded-3xl bg-[#018755] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between text-white min-h-[300px] md:min-h-[400px]">
          {/* Image Section - Side by Side */}
          <div className="relative w-full lg:w-2/5 xl:w-1/3 flex items-center justify-center mb-8 lg:mb-0">
            <div className="flex items-center">
              <img
                className="h-auto scale-150 max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] z-10"
                src={cup}
                alt="Achievement cup"
              />
              <img
                className={`h-auto scale-115 max-h-[140px] ${
                  i18n.language === "ar"
                    ? "lg:-ml-40 sm:-ml-10"
                    : "lg:-mr-30 sm:ml-20"
                } sm:max-h-[150px] md:max-h-[200px] lg:max-h-[200px] z-10`}
                src={content}
                alt="Content background"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className={`w-full -mt-4 mb-8 lg:mr-10 xl:mr-20 md:mr-10 lg:w-2/4 xl:w-1/2 ${
              i18n.language === "en" ? "text-left" : "text-right"
            } lg:pl-8 xl:pl-12`}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl text-[#EBFBF5] font-bold ${
                i18n.language === "ar" ? "font-hsn-sara" : ""
              } mb-6 md:mb-8`}
            >
              {t("achievments.title")}
            </h2>

            <div className="flex flex-col gap-4">
              <h4
                className={`text-base sm:text-lg md:text-xl text-[#D5D5D5] font-medium ${
                  i18n.language === "ar" ? "font-hsn-sara" : ""
                }`}
              >
                {t("achievments.content")}
              </h4>
              <div className="flex justify-end">
                <h4
                  className={`mt-8 text-base sm:text-lg md:text-xl bg-[#EBFBF5] text-[#002115] font-medium ${
                    i18n.language === "ar" ? "font-hsn-sara" : ""
                  } px-4 py-2 rounded-lg whitespace-nowrap`}
                >
                  {t("achievments.bar")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
