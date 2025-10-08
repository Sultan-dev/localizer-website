import * as React from "react";
import { useLocale } from "../../context/LanguageContext";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import Logo from "../../assets/Common/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();

  const { switchLanguage } = useLocale();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setAnchorElNav(null);
  };

  const pages = [
    { label: t("nav_bar.services"), id: "our-services" },
    { label: t("nav_bar.values"), id: "our-values" },
    { label: t("nav_bar.target_sectors"), id: "target-sections" },
    { label: t("nav_bar.who_us"), id: "who-us" },
  ];

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Container>
        <Toolbar disableGutters className="!flex !justify-center !items-center">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/">
              <img src={Logo} className="w-36" alt="Logo" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <GiHamburgerMenu className="text-gray-600" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleScrollToSection(page.id)}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    }}
                    className="!text-base"
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}

              <MenuItem
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  i18n.language === "ar"
                    ? switchLanguage("en")
                    : switchLanguage("ar");
                  handleCloseNavMenu();
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: i18n.language === "en" ? "start" : "end",
                }}
              >
                <Typography
                  sx={{
                    margin: "6px",
                    fontFamily: i18n.language === "en" ? "HSN Sara" : "",
                    fontWeight: 500,
                  }}
                >
                  {i18n.language === "ar" ? "Eng" : "عربي"}
                </Typography>
                <GrLanguage className="m-1" />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/">
              <img src={Logo} className="w-36" alt="Logo" />
            </a>
          </Typography>
          <Box
            className="flex justify-center items-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleScrollToSection(page.id)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                }}
                className="!text-base"
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box className="flex" sx={{ flexGrow: 0 }}>
            <div className={`flex rounded-lg`}>
              <a href="#contact-us">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#002115",
                    borderRadius: "10px",
                    padding: {
                      xs: "8px 12px",
                      md: "8px 12px",
                    },
                    fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    fontSize: {
                      xs: "0.7rem",
                      sm: "1rem",
                      md: "1.125rem",
                      lg: "1rem",
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
                  }}
                >
                  {t("hero.contact")}
                </Button>
              </a>
            </div>

            <div className="cursor-pointer">
              <IconButton
                sx={{
                  display: { lg: "flex", xs: "none", md: "flex", sm: "none" },
                }}
                className={`!ml-1 !text-[16px] ${
                  i18n.language === "en" ? "!font-hsn-sara" : ""
                } `}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  i18n.language === "ar"
                    ? switchLanguage("en")
                    : switchLanguage("ar");
                }}
              >
                {i18n.language === "ar" ? "Eng" : "عربي"}
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;
