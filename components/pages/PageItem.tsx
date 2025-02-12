import { PanelTop, Pen, Trash } from "lucide-react";
import Link from "next/link";
import Switch from "../UI/Switch";
import { updatePage } from "@/lib/actions/pages/page.actions";

export const PageItem: React.FC<{ page: PageType }> = ({ page }) => {
  return (
    <div
      key={page.slug}
      className="flex w-full items-center justify-between rounded-3xl border px-4 py-2 shadow-simple transition-colors hover:border-gold"
    >
      <div className="flex items-center gap-1">
        <PanelTop className="text-gold" />
        <div>
          <Link
            href={`/${page.slug}`}
            className="font-semibold hover:underline"
          >
            {page.title}
          </Link>
          <p className="text-sm text-gray-400">({page.slug})</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">{page.blocks.length} blocks</p>
      <p className="text-sm text-gray-400">{page.forms.length} forms</p>
      <Switch<PageType> checkKey={"isActive"} item={page} action={updatePage} />
      <div className="flex">
        <button className="rounded-full p-2 transition-colors hover:bg-red-100 hover:text-red-500">
          <Trash size={16} />
        </button>
        <Link
          href={`pages/edit/${page.slug}`}
          className="rounded-full p-2 transition-colors hover:bg-gray-200 hover:text-primary"
        >
          <Pen size={16} />
        </Link>
      </div>
    </div>
  );
};
