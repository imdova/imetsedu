import Image from "next/image";
import { formatDateAt } from "@/util/general";
import Switch from "./Switch";
import CompactText from "./CompactText";

interface CellProps<T> {
  item: T;
  column: Column<T>;
}

export default function TableCell<T>({ item, column }: CellProps<T>) {
  const { key } = column;
  switch (column.type) {
    case "boolean":
      if (!key) return null;
      if (typeof item[key] !== "boolean")
        return (
          <td className="whitespace-nowrap px-6 py-4">
            {typeof item[key] === "string"
              ? item[key]
              : JSON.stringify(item[key])}
          </td>
        );
      return <Switch<T> checkKey={key} item={item} action={column.action} />;
    case "image":
      return (
        key && (
          <td className="whitespace-nowrap px-6 py-4">
            <Image
              width={50}
              height={50}
              src={item[key] as string}
              alt={item[key] as string}
              className="h-10 w-10 rounded-full"
            />
          </td>
        )
      );
    case "action":
      const { RowAction } = column;
      return (
        <td className="whitespace-nowrap px-6 py-4">
          {RowAction ? <RowAction item={item} /> : null}
        </td>
      );
    case "date":
      const date =
        key &&
        (typeof item[key] === "string" ? item[key] : JSON.stringify(item[key]));
      return (
        <td className="whitespace-nowrap px-6 py-4">
          {formatDateAt(date as string)}
        </td>
      );
    case "description":
      if (!key) return null;
      const content =
        typeof item[key] === "string" ? item[key] : JSON.stringify(item[key]);
      return (
        <td className="px-6 py-4">
          <CompactText content={content} />
        </td>
      );
    default:
      return (
        key && (
          <td className="whitespace-nowrap px-6 py-4">
            {typeof item[key] === "string"
              ? item[key]
              : JSON.stringify(item[key])}
          </td>
        )
      );
  }
}
