import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "you can connect your Instagram account to your dashboard to get insights on your posts and stories",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "you can connect your Salesforce account to your dashboard to get insights on your leads and opportunities",
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
];
