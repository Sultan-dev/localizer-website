import { t } from "i18next";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin?: string;
  phone?: string;
}

export const teamMember: TeamMember = {
  name: t("human.name"),
  title: t("human.job"),
  description: t("human.contact"),
  image: "/images/professional-person.png",
  linkedin: "https://linkedin.com/in/hisham",
  phone: "+966501234567",
};
