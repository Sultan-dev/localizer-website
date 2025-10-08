import waveTop from "../../../assets/Header/riyad.jpg";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LocalizersText from "../../../assets/Common/TheLocalizersAITypo.svg";
import LocalizersLogo from "../../../assets/Common/TheLocalizersAIIcon.svg";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const textVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        height: "clamp(350px, 65vh, 450px)",
        backgroundImage: `url(${waveTop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 text-center px-4">
        <motion.div initial="initial" animate="animate" variants={textVariants}>
          <Typography
            variant="h2"
            className="text-white font-bold leading-tight"
            sx={{
              fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
              fontSize: {
                xs: "1.7rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
                xl: "4rem",
              },
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {t("hero.content")}
          </Typography>
        </motion.div>

        <div className="flex justify-center items-center">
          <a href="https://ml-expert.cycls.ai/" target="_blank">
            <div
              className={`flex ${"bg-[#006A43]"} p-3 m-3 rounded-lg hover:inset-shadow-md hover:transform hover:-translate-y-0.5 transition-all ease-out`}
              style={{}}
            >
              <img
                className="lg:w-32 w-28 p-[2px] m-[2px]"
                src={LocalizersText}
              />
              <img className="w-6 p-[4px]" src={LocalizersLogo} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
