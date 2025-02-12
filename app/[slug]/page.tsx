import { pages } from "@/constants/page";
import { notFound } from "next/navigation";
import PageView from "./pageView";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = pages.find((x) => x.slug === slug);
  if (!page) return notFound();

  return <PageView {...page} />;
};

export default Page;
