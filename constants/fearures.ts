import {
  BookOpen,
  Target,
  Users,
  Clock,
  Shield,
  LucideFileWarning,
} from "lucide-react";

export const featuresData: Array<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = [
  {
    icon: BookOpen,
    title: "Expert-Led Training",
    description:
      "Learn directly from industry professionals with years of experience",
  },
  {
    icon: Target,
    title: "Practical Skills",
    description:
      "Gain hands-on experience with real-world projects and case studies",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with peers and build valuable professional relationships",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with both live and recorded sessions",
  },
  {
    icon: Shield,
    title: "Certification",
    description: "Get certified and increase your job prospects",
  },
  {
    icon: LucideFileWarning,
    title: "Support",
    description: "Get support from our team and community",
  },
];
