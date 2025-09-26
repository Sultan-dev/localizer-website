import { useTranslation } from "react-i18next";

interface ItemProps {
  title: string;
  Links: { name: string | React.ReactNode; link: string }[];
}

const Item: React.FC<ItemProps> = ({ title, Links }) => {
  const { i18n } = useTranslation();
  return (
    <ul dir="rtl">
      <h1
        className={`mb-1 text-[#018755] w-48 font-semibold ${
          i18n.language === "ar" ? "font-hsn-sara" : ""
        }`}
      >
        {title}
      </h1>
      {Links.map((link) => (
        <li key={link.link}>
          <a
            target={link.link !== "#our-services" ? "_blank" : "_self"}
            className={`text-gray-400 duration-300
          text-sm ${
            i18n.language === "ar" ? "font-hsn-sara" : ""
          } cursor-pointer leading-6`}
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
