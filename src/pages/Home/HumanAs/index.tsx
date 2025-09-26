import hisama from "../../../assets/ContactAs/hisham2.png";
import veactor from "../../../assets/ContactAs/Shape1.svg";
import shape from "../../../assets/ContactAs/Shape2.svg";
import { Box, Typography, Container, Grid } from "@mui/material";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { teamMember } from "./Helper";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { i18n } = useTranslation();

  return (
    <div className="w-full overflow-hidden py-8 md:py-12 lg:py-16">
      <Container maxWidth="xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[300px] md:min-h-[400px]">
          {/* Left Section - Gray Shapes (hidden on mobile) */}
          <div className="hidden lg:block lg:-ml-10 xl:-ml-20 w-auto">
            <img
              src={shape}
              className="w-[100px] md:w-[150px] lg:w-[200px] h-auto"
              alt="decoration shape"
            />
          </div>

          {/* Center Section - Team Member Card */}
          <Grid  className="w-full">
            <Box className="flex justify-center px-4 w-full">
              <div className="relative w-full max-w-[500px]">
                {/* Main Card */}
                <div
                  className="relative bg-gradient-to-b from-[#018755] to-[#018755] 
                  w-full aspect-[3/4] 
                  max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]
                  max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px]
                  rounded-3xl overflow-hidden mx-auto"
                >
                  {/* Person Image */}
                  <div className="relative w-full h-full">
                    <div className="flex justify-center items-start absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-600">
                      <img
                        src={hisama}
                        className="h-full w-auto object-cover object-top"
                        alt={teamMember.name}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-48 md:h-64"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(5, 150, 105, 0.95) 0%, rgba(5, 150, 105, 0.7) 50%, transparent 100%)",
                        backdropFilter: "opacity-100",
                      }}
                    ></div>

                    {/* Text Content */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
                      dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    >
                      <Typography
                        variant="h5"
                        className="!font-bold !text-white !mt-12 md:!mt-20 !mb-2 text-center z-20"
                        sx={{
                          fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                            lg: "1.5rem",
                          },
                          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {teamMember.name}
                      </Typography>

                      <Typography
                        variant="h6"
                        className="!font-semibold !mb-3 text-center opacity-90"
                        sx={{
                          fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                          fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem",
                          },
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {teamMember.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="text-center opacity-80 mb-4 leading-relaxed px-2"
                        sx={{
                          fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                          },
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {teamMember.description}
                      </Typography>

                      <div className="flex justify-center space-x-4 mt-4">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-opacity-30 transition-all z-20">
                          <a
                            target="_blank"
                            href="https://linkedin.com/in/hishamalammash"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedinIn className="text-[#018755]" />
                          </a>
                        </div>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-opacity-30 transition-all z-20">
                          <a href="tel:966569106249">
                            <FaPhoneAlt className="text-[#018755]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>

          {/* Right Section - Gray Shapes (hidden on mobile) */}
          <div className="hidden lg:block lg:-mr-10 xl:-mr-20 w-auto">
            <img
              src={veactor}
              className="w-[100px] md:w-[150px] lg:w-[200px] h-auto"
              alt="decoration shape"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
