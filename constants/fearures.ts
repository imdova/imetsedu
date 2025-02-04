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
    title: "8 Lectures",
    description:
      "Learn directly from industry professionals with years of experience",
  },
  {
    icon: Target,
    title: "Online-zoom live",
    description:
      "Gain hands-on experience with real-world projects and case studies",
  },
  {
    icon: Users,
    title: "Certified Instructor",
    description:
      "Connect with peers and build valuable professional relationships",
  },
  {
    icon: Clock,
    title: "1 Lecture weekly",
    description: "Learn at your own pace with both live and recorded sessions",
  },
  {
    icon: Shield,
    title: "International Certification",
    description: "Get certified and increase your job prospects",
  },
  {
    icon: LucideFileWarning,
    title: "Student Portal",
    description: "Get support from our team and community",
  },
];
