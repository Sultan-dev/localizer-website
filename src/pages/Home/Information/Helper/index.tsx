import { t } from "i18next";
import logo1 from "../../../../assets/Information/logo1.png";
import logo2 from "../../../../assets/Information/logo2.png";
import logo3 from "../../../../assets/Information/logo3.png";
import logo4 from "../../../../assets/Information/logo4.png";
import bank from "../../../../assets/Information/bank.png";
import office from "../../../../assets/Information/office.png";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  sub_image_1?: string;
  sub_title_1?: string;
  sub_image_2?: string;
  sub_title_2?: string;
}

export const services: ServiceItem[] = [
  {
    id: "consulting",
    title: t("information.header1"),
    description: t("information.header1_content"),
    icon: logo4,
  },
  {
    id: "management",
    title: t("information.header2"),
    description: t("information.header2_content"),
    icon: logo3,
  },
  {
    id: "training",
    title: t("information.header3"),
    description: t("information.header3_content"),
    icon: logo2,
    sub_image_1: bank,
    sub_title_1: t("information.header3_content_1"),
    sub_image_2: office,
    sub_title_2: t("information.header3_content_2"),
  },
  {
    id: "ai-solutions",
    title: t("information.header4"),
    description: t("information.header4_content"),
    icon: logo1,
  },
];
