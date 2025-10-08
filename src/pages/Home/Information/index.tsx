import type React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { IoAdd } from "react-icons/io5";
import greenShape from "../../../assets/Information/green.png";
import { services } from "./Helper";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { i18n } = useTranslation();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      className="flex justify-center items-center"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <Grid>
        <Box className=" lg:flex items-center justify-start relative ">
          <img
            className={`w-full h-full ${
              i18n.language === "ar" ? "" : " rotate-180"
            }`}
            src={greenShape}
          />
        </Box>
      </Grid>
      <Grid className="">
        <Grid>
          <Box
            className="h-full flex justify-center items-center px-0 py-8"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="mr-10">
              {services.map((service, index) => (
                <div key={service.id}>
                  <Accordion
                    expanded={expanded === service.id}
                    onChange={handleChange(service.id)}
                    elevation={0}
                    sx={{
                      backgroundColor: "transparent",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        flexDirection: "row",
                        padding: "16px 0",
                        minHeight: "64px",
                        "& .MuiAccordionSummary-content": {
                          margin: "12px 0",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          marginLeft: "16px",
                          marginRight: 0,
                        },
                      }}
                    >
                      <Box className="flex items-center flex-1">
                        <div
                          className={`w-8 h-8 rounded-sm ${
                            i18n.language === "ar" ? "ml-4" : "mr-2"
                          } bg-white`}
                        >
                          <img className="w-6 h-6 p-1 m-1" src={service.icon} />
                        </div>

                        <Typography
                          variant="h6"
                          className="text-[#018755]"
                          sx={{
                            fontFamily:
                              i18n.language === "ar" ? "HSN Sara" : "",
                            fontSize: { lg: "24px", xs: "1rem", md: "1.1rem" },
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <div className="m-1 p-1">
                          {expanded === service.id ? (
                            // <div className="w-4 h-4 rounded-sm bg-gray-700">
                            //   <IoRemove className="text-white" />
                            // </div>
                            ""
                          ) : (
                            <div className="w-4 h-4 rounded-sm bg-gray-700">
                              <IoAdd className="text-white" />
                            </div>
                          )}
                        </div>
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        padding: "0 0 24px 40px",
                        borderTop: "none",
                        width: { lg: "70%", sm: "100%" },
                      }}
                    >
                      <Typography
                        variant="body1"
                        className={`text-gray-600 text-justify leading-relaxed ${
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }`}
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                        }}
                      >
                        {service.description}
                      </Typography>
                      {service.sub_title_1 && (
                        <>
                          {" "}
                          <div className="flex mt-2">
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-sm ${
                                i18n.language === "ar" ? "ml-4" : "mr-2"
                              } bg-[#018755]`}
                            >
                              <img
                                className="w-5 h-5 object-contain"
                                src={service.sub_image_1}
                              />
                            </div>
                            <Typography
                              variant="body1"
                              className="text-gray-600 leading-relaxed"
                              sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.7,
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                                fontFamily:
                                  i18n.language === "ar" ? "HSN Sara" : "",
                              }}
                            >
                              {service.sub_title_1}
                            </Typography>
                          </div>
                          <div className="flex mt-2">
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-sm ${
                                i18n.language === "ar" ? "ml-4" : "mr-2"
                              } bg-[#018755]`}
                            >
                              <img
                                className="w-5 h-5 object-contain"
                                src={service.sub_image_2}
                              />
                            </div>
                            <Typography
                              variant="body1"
                              className="text-gray-600 leading-relaxed"
                              sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.7,
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                                fontFamily:
                                  i18n.language === "ar" ? "HSN Sara" : "",
                              }}
                            >
                              {service.sub_title_2}
                            </Typography>
                          </div>
                        </>
                      )}
                    </AccordionDetails>
                  </Accordion>

                  {/* Divider - Hidden when expanded */}
                  {expanded !== service.id && index < services.length - 1 && (
                    <div className="w-2/3 border-b border-gray-200 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
