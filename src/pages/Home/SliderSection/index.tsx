// import { Box, Button } from "@mui/material";
// import { IoArrowForward } from "react-icons/io5";
// import image1 from "../../../assets/AboutUs/image1.png";
// import image2 from "../../../assets/AboutUs/image2.png";
// import image3 from "../../../assets/AboutUs/image3.png";
// import image4 from "../../../assets/AboutUs/image4.png";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";

// export const ImageSlider = () => {
//   const { i18n } = useTranslation();
//   const [showFirstSet, setShowFirstSet] = useState(false);

//   // Define both image sets
//   const firstSet = [image1, image2];
//   const secondSet = [image3, image4];

//   // Handler function to toggle between image sets
//   const HandlerClick = () => {
//     setShowFirstSet(!showFirstSet);
//   };

//   // Determine which set to display based on state
//   const currentSet = showFirstSet ? firstSet : secondSet;

//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="w-full max-w-lg overflow-hidden rounded-lg">
//         {currentSet.map((item, index) => (
//           <img
//             key={`slider-img-${index}`} // Added key for React optimization
//             src={item}
//             alt={`slider-${index}`}
//             className="w-[400px] h-[200px] object-cover m-1 p-2 rounded-2xl"
//           />
//         ))}
//       </div>
//       <Box className="flex justify-end">
//         <Button
//           type="submit"
//           variant="contained"
//           onClick={HandlerClick}
//           sx={{
//             width: "150px",
//             height: "50px",
//             marginTop: "-70px",
//             marginRight: "-110px",
//             marginLeft: i18n.language === "en" ? "200px" : "",
//             backgroundColor: "#059669",
//             borderRadius: "10px",
//             padding: "12px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             textTransform: "none",
//             "&:hover": {
//               backgroundColor: "#047857",
//             },
//             boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
//           }}
//         >
//           <IoArrowForward />
//         </Button>
//       </Box>
//     </div>
//   );
// };
import { Box, Button } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";
import image1 from "../../../assets/AboutUs/image1.png";
import image2 from "../../../assets/AboutUs/image2.png";
import image3 from "../../../assets/AboutUs/image3.png";
import image4 from "../../../assets/AboutUs/image4.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImageSlider = () => {
  const { i18n } = useTranslation();
  const [showFirstSet, setShowFirstSet] = useState(false);

  const firstSet = [image1, image2];
  const secondSet = [image3, image4];
  const currentSet = showFirstSet ? firstSet : secondSet;

  const HandlerClick = () => {
    setShowFirstSet(!showFirstSet);
  };

  // Animation variants
  const imageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full flex flex-col items-center px-4">
      {/* Images Container */}
      <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[600px] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <div className="flex flex-col gap-2 sm:gap-3">
            {currentSet.map((item, index) => (
              <motion.div
                key={`${showFirstSet ? "set1" : "set2"}-${index}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                className="flex justify-center"
              >
                <motion.img
                  src={item}
                  alt={`slider-${index}`}
                  className="lg:w-[400px] lg:h-[200px] object-cover m-1 p-2 rounded-2xl"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Button - Responsive Positioning */}
      <Box className="flex justify-end w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[600px]">
        <Button
          type="submit"
          variant="contained"
          onClick={HandlerClick}
          sx={{
            width: {
              xs: "95px",
              sm: "130px",
              md: "140px",
              lg: "150px",
            },
            height: {
              xs: "35px",
              sm: "45px",
              md: "50px",
            },
            marginTop: {
              xs: "-40px",
              sm: "-55px",
              md: "-60px",
              lg: "-70px",
            },
            marginRight: {
              xs: "5px",
              sm: "20px",
              md: "10px",
              lg: "85px",
              xl: "110px",
            },
            marginLeft:
              i18n.language === "en"
                ? {
                    xs: "250px",
                    sm: "230px",
                    md: "280px",
                    lg: "300px",
                    xl: "340px",
                  }
                : "",
            backgroundColor: "#059669",
            borderRadius: "10px",
            padding: "12px",
            fontSize: {
              xs: "14px",
              md: "16px",
            },
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#047857",
            },
            boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
          }}
        >
          <motion.div
            animate={{ rotate: showFirstSet ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IoArrowForward />
          </motion.div>
        </Button>
      </Box>
    </div>
  );
};
