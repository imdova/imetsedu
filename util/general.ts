import { ReadonlyURLSearchParams } from "next/navigation";

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function formatDateAt(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${day} ${month}`;
}
