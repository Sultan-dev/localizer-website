import type React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  //Fab,
} from "@mui/material";
//import { IoLogoWhatsapp } from "react-icons/io5";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

// Create RTL theme
const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#059669", // Emerald green color
    },
  },
  // typography: {
  //   fontFamily: localStorage.getItem("locale") === "ar" ? "HSN Sara" : "",
  // },
});

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const email = "Partnership@TheLocalizers.com";
    const subject = `${formData.fullName} - ${formData.organization}`;
    const body = formData.message;

    // Create mailto link
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Optional: Reset form after submission
    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // const handleWhatsAppClick = () => {
  //   window.open("https://wa.me/966569106249", "_blank");
  // };

  return (
    <ThemeProvider theme={theme}>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="py-4 px-2">
        <Container>
          <Box className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {/* Title */}
            <Typography
              variant="h4"
              className={`text-[#018755] !text-4xl font-bold !mb-6 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
              }}
            >
              {t("contact_us.title")}
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* First Row - Name and Organization */}
              <div className="mb-1 flex flex-col md:flex-row">
                <Grid className="w-full md:w-1/2 p-1 m-1">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t("contact_us.name")}
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid #059669",
                        },
                      },
                      "& .MuiInputBase-input": {
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        padding: "16px",
                        fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      },
                    }}
                  />
                </Grid>
                <Grid className="w-full md:w-1/2 p-1 m-1">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t("contact_us.mission")}
                    value={formData.organization}
                    onChange={handleChange("organization")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid #059669",
                        },
                      },
                      "& .MuiInputBase-input": {
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        padding: "16px",
                        fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      },
                    }}
                  />
                </Grid>
              </div>

              {/* Second Row - Email and Phone */}
              <div className="mb-3 flex flex-col md:flex-row">
                <Grid className="w-full md:w-1/2 p-1 m-1">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t("contact_us.email")}
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid #059669",
                        },
                      },
                      "& .MuiInputBase-input": {
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        padding: "16px",
                        fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      },
                    }}
                  />
                </Grid>
                <Grid className="w-full md:w-1/2 p-1 m-1">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t("contact_us.phone")}
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid #059669",
                        },
                      },
                      "& .MuiInputBase-input": {
                        textAlign: i18n.language === "ar" ? "right" : "left",
                        padding: "16px",
                        fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      },
                    }}
                  />
                </Grid>
              </div>

              {/* Message Field */}
              <Box className="mb-8 p-1 m-1">
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  placeholder={t("contact_us.message")}
                  value={formData.message}
                  onChange={handleChange("message")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f3f4f6",
                      borderRadius: "12px",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid #059669",
                      },
                    },
                    "& .MuiInputBase-input": {
                      textAlign: i18n.language === "ar" ? "right" : "left",
                      padding: "16px",
                      fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    },
                  }}
                />
              </Box>

              {/* Submit Button */}
              <Box className="flex justify-end -mt-5">
                <Button
                  type="submit"
                  variant="contained"
                  //startIcon={<IoArrowBack />}
                  sx={{
                    backgroundColor: "#059669",
                    borderRadius: "25px",
                    padding: "12px 32px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#047857",
                    },
                    boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
                  }}
                >
                  {i18n.language === "ar" ? (
                    <IoIosArrowBack />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>

        {/* WhatsApp Floating Button */}
        {/* <Fab
          color="primary"
          aria-label="whatsapp"
          onClick={handleWhatsAppClick}
          sx={{
            margin: "4px",
            padding: "4px",
            backgroundColor: "#25D366",
            "&:hover": {
              backgroundColor: "#20BA5A",
            },
            zIndex: 1000,
          }}
        >
          <IoLogoWhatsapp className="w-10 h-10" />
        </Fab> */}
      </div>
    </ThemeProvider>
  );
}
