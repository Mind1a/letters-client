export type PrivacyPolicyItem = {
  type: "text" | "email";
  value: string;
  title?: string;
};

export type PrivacyPolicySection = {
  id: number;
  title: string;
  description?: string;
  descriptionClassName?: string;
  items: PrivacyPolicyItem[];
};

export type privacyPolicyContentProps = {
  title: string;
  description: string;
};
