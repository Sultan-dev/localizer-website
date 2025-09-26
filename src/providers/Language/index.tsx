import React from "react";
import { LanguageAppProvider } from "../../context/LanguageContext";
import "../../localization";

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LanguageAppProvider>{children}</LanguageAppProvider>;
};

export default LanguageProvider;
