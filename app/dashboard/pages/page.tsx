import { getPages } from "@/lib/actions/pages/page.actions";
import Link from "next/link";
import { PageItem } from "@/components/pages/PageItem";

const Page = async () => {
  const result = await getPages();
  const pages = result.data;
  if (!pages || !pages.length) return null;
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col p-5">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Pages</h1>
          <Link
            href="pages/create"
            className="transform self-end text-nowrap rounded-2xl bg-gold px-4 py-2 text-white shadow-md duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Add New Page
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {pages.map((page) => (
            <PageItem key={page.slug} page={page} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
