import { notFound } from "next/navigation";
import PageView from "./pageView";
import { getPage } from "@/lib/actions/pages/page.actions";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const result = await getPage(slug);
  if (!result.success || !result.data) return notFound();
  const page = result.data;
  if (!page) return notFound();
  return <PageView page={page} />;
};

export default Page;
