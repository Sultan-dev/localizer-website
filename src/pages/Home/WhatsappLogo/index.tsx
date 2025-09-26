import { Fab } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966569106249", "_blank");
  };

  return (
    <Fab
      color="primary"
      aria-label="whatsapp"
      onClick={handleWhatsAppClick}
      sx={{
        position: "fixed", // stays on screen while scrolling
        bottom: 20,
        right: 20,
        backgroundColor: "#25D366",
        "&:hover": {
          backgroundColor: "#20BA5A",
        },
        zIndex: 1000,
      }}
    >
      <IoLogoWhatsapp className="w-10 h-10" />
    </Fab>
  );
}
