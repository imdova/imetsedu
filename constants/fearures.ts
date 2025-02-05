import {
  BookOpen,
  Target,
  Users,
  Clock,
  Shield,
  LucideFileWarning,
} from "lucide-react";

export type FeaturesType = {
  icon: React.ElementType;
  title: string;
  description?: string;
};

export const featuresData: FeaturesType[] = [
  {
    icon: BookOpen,
    title: "8 Lectures",
  },
  {
    icon: Target,
    title: "Online-zoom live",
  },
  {
    icon: Users,
    title: "Certified Instructor",
  },
  {
    icon: Clock,
    title: "1 Lecture weekly",
  },
  {
    icon: Shield,
    title: "International Certification",
  },
  {
    icon: LucideFileWarning,
    title: "Student Portal",
  },
];
