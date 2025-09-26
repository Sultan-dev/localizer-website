import {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import i18n from "../localization"; // Import the i18next instance

// Define types for our context
type LocaleContextType = {
  locale: string;
  switchLanguage: (lang: string) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Define props type for the provider
type LanguageAppProviderProps = {
  children: ReactNode;
};

// Locale provider with language switching logic
export const LanguageAppProvider = ({ children }: LanguageAppProviderProps) => {
  const [locale, setLocale] = useState<string>(
    localStorage.getItem("locale") || i18n.language
  );

  useEffect(() => {
    i18n.changeLanguage(locale); // Sync i18n with state
    localStorage.setItem("locale", locale);
  }, [locale]);

  const switchLanguage = (lang: string) => {
    setLocale(lang); // Update locale in state
    window.location.reload();
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LanguageAppProvider");
  }
  return context;
};
