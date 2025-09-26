import buildings from "../../../assets/Header/buildings.png";
import waveTop from "../../../assets/Header/wave-top.png";
import waveBottom from "../../../assets/Header/wave-bottom.png";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "en";

  const textVariants = {
    initial: { opacity: 0, x: i18n.language === "ar" ? 400 : -400 },
    animate: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const buttonVariants = {
    initial: { opacity: 0, x: i18n.language === "ar" ? 500 : -500 },
    animate: { opacity: 1, x: 0, transition: { duration: 4 } },
  };

  return (
    <div
      className="relative"
      style={{ height: "clamp(350px, 65vh, 450px)" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`mt-10 mb-10 absolute inset-0 bg-gradient-to-l from-[#006A43] to-[#00D083] ${
          isRTL
            ? "rounded-tr-[150px] md:rounded-tr-[250px] rounded-br-[150px] md:rounded-br-[250px] ml-0 mr-20 md:mr-45"
            : "rounded-tl-[150px] md:rounded-tl-[250px] rounded-bl-[150px] md:rounded-bl-[250px] mr-0 ml-20 md:ml-45"
        }`}
      />

      <div className="relative z-7 container mx-auto px-4 py-16">
        {/* Wave and buildings - only visible on md+ */}
        <div
          className={`z-0 absolute -mt-1 min-h-[50px] md:flex ${
            isRTL ? "mr-14 ml-0" : "ml-14 mr-0"
          } custom-scale`}
        >
          <img
            className={`h-[150px] z-10 wave-motion ${
              isRTL ? "mr-50 ml-0" : "ml-66 mr-0"
            } custom-scale`}
            src={waveTop}
            alt="Wave Top"
          />
          <img
            className={`lg:h-[320px] h-[165px] z-1 -mt-0 ${
              isRTL
                ? "lg:-mr-100 mr-28 lg:mt-0 mt-4 ml-0"
                : "ml-28 mt-4 mr-0 lg:mt-0 lg:-ml-100"
              //isRTL ? "-mr-100" : "-ml-100"
            } custom-scale`}
            src={buildings}
            alt="Buildings"
          />
        </div>

        <img
          className={`absolute h-[120px] z-10 mt-15 wave-motion-slow hidden md:block ${
            isRTL ? "mr-17 ml-0" : "ml-17 mr-0"
          }`}
          src={waveBottom}
          alt="Wave Bottom"
        />

        <div
          className={`flex items-center justify-between min-h-[300px] md:min-h-[400px] ${
            isRTL ? "-ml-4 md:-ml-30" : "-mr-4 md:-mr-30"
          }`}
        >
          <div
            className={`flex-1 ${
              isRTL ? "text-left pl-4 md:pl-8" : "text-right pr-4 md:pr-8"
            }`}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
            >
              <Typography
                variant="h2"
                className={`text-white font-bold !-mt-4 md:!-mt-10 !mb-6 md:!mb-8 leading-tight ${
                  isRTL ? "text-left" : "text-right"
                }`}
                sx={{
                  fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "2.25rem",
                    lg: "2.5rem",
                    xl: "3rem",
                  },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {t("hero.content")}
              </Typography>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={buttonVariants}
            >
              <a href="#contact-us">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#002115",
                    borderRadius: "10px",
                    padding: {
                      xs: "8px 24px",
                      md: "12px 32px",
                    },
                    fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                      md: "1.125rem",
                      lg: "1.3rem",
                    },
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    "&:hover": {
                      backgroundColor: "#f9fafb",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                    float: isRTL ? "left" : "right",
                  }}
                >
                  {t("hero.contact")}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
