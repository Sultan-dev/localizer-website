import { useState } from "react";
import { Button, MenuItem, Select, useMediaQuery } from "@mui/material";
import { sectors } from "./Helper";
import { useTranslation } from "react-i18next";

export const TargetSectorsSection = () => {
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [dropdownSector, setDropdownSector] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const visibleSectors = isMobile ? sectors.slice(0, 5) : sectors;
  const extraSectors = isMobile ? sectors.slice(5) : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDropdownChange = (event: any) => {
    const sector = sectors.find((s) => s.name === event.target.value);
    if (sector) {
      setSelectedSector(sector);
      setDropdownSector(sector.name);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      dir={i18n.language === "en" ? "rtl" : "ltr"}
    >
      <div className="py-12 px-4 w-[80%]">
        <div className="rounded-[30px] bg-[#018755] p-6 md:p-10 flex flex-col md:flex-row items-center text-white min-h-[400px]">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start -ml-0 md:-ml-10 mb-6 md:mb-0">
            <div className="relative w-[220px] h-[320px] md:w-[330px] md:h-[500px] overflow-hidden">
              <img
                src={selectedSector.image}
                alt={selectedSector.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full md:w-[70%] ${
              i18n.language === "ar" ? "text-right" : "text-left"
            } md:pl-10`}
          >
            <h2
              className={`text-xl md:text-3xl font-bold mb-6 md:mb-10 ${
                i18n.language === "ar" ? "font-hsn-sara" : ""
              }`}
            >
              {t("target_sections.title")}
            </h2>

            <div className="flex flex-wrap gap-2 justify-end overflow-y-auto">
              {visibleSectors.map((sector) => (
                <Button
                  key={sector.name}
                  variant={
                    sector.name === selectedSector.name
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => {
                    setSelectedSector(sector);
                    setDropdownSector(null); // Reset dropdown when selecting main list item
                  }}
                  sx={{
                    fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    fontSize: {
                      lg: i18n.language === "en" ? "14px" : "18px",
                      xs: "12px",
                      md: "16px",
                    },
                    color:
                      sector.name === selectedSector.name ? "#018755" : "#fff",
                    backgroundColor:
                      sector.name === selectedSector.name
                        ? "#fff"
                        : "transparent",
                    borderColor: "#fff",
                    "&:hover": {
                      backgroundColor: "#f3f3f3",
                      color: "#000",
                    },
                    borderRadius: "15px",
                    padding: "4px 12px",
                    minWidth: "auto",
                  }}
                >
                  {sector.name}
                </Button>
              ))}

              {isMobile && extraSectors.length > 0 && (
                <Select
                  value={dropdownSector || ""}
                  onChange={handleDropdownChange}
                  displayEmpty
                  sx={{
                    fontFamily: i18n.language === "ar" ? "HSN Sara" : "",
                    fontSize: { xs: "12px", md: "16px" },
                    overflow: "hidden",
                    height: "40px",
                    color: dropdownSector ? "#018755" : "#fff",
                    backgroundColor: dropdownSector ? "#fff" : "transparent",
                    border: "1px solid #fff",
                    borderRadius: "15px",
                    padding: "4px 12px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      color: dropdownSector ? "#018755" : "#fff",
                    },
                    "&:hover": {
                      backgroundColor: "#f3f3f3",
                      color: "#000",
                      "& .MuiSvgIcon-root": {
                        color: "#000",
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    {t("target_sections.more")}
                  </MenuItem>
                  {extraSectors.map((sector) => (
                    <MenuItem key={sector.name} value={sector.name}>
                      {sector.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
