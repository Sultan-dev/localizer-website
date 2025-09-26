import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import ValuesImage from "../../../assets/Values/Values.png";
import { useTranslation } from "react-i18next";

const ArabicLayout = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const StyledCard = styled(Card)(() => ({
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  }));

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        display: "flex",
        gap: "24px",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ flex: 1.5 }}>
        <StyledCard>
          <CardContent sx={{ padding: 0, height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Image Placeholder - Replace with your actual image */}
              <Box
                sx={{
                  height: "",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />

              <Box sx={{ padding: "32px" }}>
                <div className=" flex lg:flex-row lg:justify-center lg:items-center flex-col justify-start items-start ">
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      fontSize: i18n.language === "ar" ? "40px" : "32px",
                      fontWeight: "bold",
                      color: "#018755",
                      padding: "10px",
                      margin: { lg: "10px" },
                      marginBottom: { lg: "16px" },
                      paddingBottom: { lg: "12px" },
                    }}
                  >
                    {t("values.our_value")}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                      fontSize: i18n.language === "ar" ? "18px" : "16px",
                      lineHeight: "146%",
                      padding: "10px",
                      marginTop: { sm: "15px", md: "15px", lg: "1px" },
                      margin: { lg: "10px", md: "10px", sm: "10px" },
                      color: "#4A5568",
                      maxWidth: "349px",
                    }}
                  >
                    {t("values.value_content")}
                  </Typography>
                </div>

                <div className="flex justify-center items-center mt-2">
                  <img className="rounded-xl" src={ValuesImage} />
                </div>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Box>

      {/* Left Column - Two Cards */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Mission Card */}
        <StyledCard>
          <CardContent sx={{ padding: "32px" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                fontSize: i18n.language === "ar" ? "32px" : "28px",
                fontWeight: "bold",
                color: "#018755",
                marginBottom: "16px",
                paddingBottom: "12px",
              }}
            >
              {t("values.our_messages")}
            </Typography>
            <Typography
              sx={{
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                fontSize: i18n.language === "ar" ? "18px" : "16px",
                lineHeight: "1.8",
                color: "#4A5568",
              }}
            >
              {t("values.messages_content")}
            </Typography>
          </CardContent>
        </StyledCard>

        {/* Vision Card */}
        <StyledCard>
          <CardContent sx={{ padding: "32px" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                fontSize: i18n.language === "ar" ? "32px" : "28px",
                fontWeight: "bold",
                color: "#018755",
                marginBottom: "16px",
                paddingBottom: "12px",
              }}
            >
              {t("values.our_visions")}
            </Typography>
            <Typography
              sx={{
                fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                fontSize: i18n.language === "ar" ? "18px" : "16px",
                lineHeight: "1.8",
                color: "#4A5568",
              }}
            >
              {t("values.visions_content")}
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default ArabicLayout;
