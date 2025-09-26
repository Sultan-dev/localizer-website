import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import image1 from "../../../assets/Clients/image 11.png";
import image2 from "../../../assets/Clients/image 22.png";
import image3 from "../../../assets/Clients/image 33.png";
import image4 from "../../../assets/Clients/image 44.png";
import image5 from "../../../assets/Clients/image 55.png";
import image6 from "../../../assets/Clients/image 66.png";
import image7 from "../../../assets/Clients/image 77.png";

const OurClients = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const durationRef = useRef<number>(20000); // 20 seconds for one full loop

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the images for seamless looping
    const originalContent = slider.innerHTML;
    slider.innerHTML = originalContent + originalContent;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % durationRef.current) / durationRef.current;

      // Calculate position based on progress
      const sliderWidth = slider.scrollWidth / 2; // Because we duplicated the content
      const translateX = -progress * sliderWidth;

      slider.style.transform = `translateX(${translateX}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full mb-15">
      <div className="w-full">
        <div className="px-4 py-4">
          <div className=" max-w-6xl mx-auto">
            <Typography
              variant="h4"
              className={`text-[#018755] !font-bold !mb-8 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              sx={{
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: i18n.language === "ar" ? "3rem" : "2rem",
                },
              }}
            >
              {t("clients.our_clients")}
            </Typography>
          </div>
        </div>

        <div className="relative w-full h-[120px] md:h-[120px] lg:h-[140px] xl:h-[160px]">
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="absolute flex items-center h-full whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {[image1, image2, image3, image4, image5, image6, image7].map(
              (img, index) => (
                <div
                  key={`client-${index}`}
                  className="inline-flex justify-center items-center mx-4 md:mx-6 lg:mx-8"
                  style={{
                    width: "200px",
                    height: "150px",
                    minWidth: "120px",
                  }}
                >
                  <img
                    className="w-full h-full object-contain transition-all duration-300"
                    src={img}
                    alt={`Client logo ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
