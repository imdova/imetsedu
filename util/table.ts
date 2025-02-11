export function areAllItemsSelected<T extends { _id: string }>(
  items: T[],
  selectedIds: string[],
): string {
  // Create a Set from selectedIds for O(1) lookup time
  const selectedIdsSet = new Set(selectedIds);
  const areAllSelected = items.every((item) => selectedIdsSet.has(item._id));
  return areAllSelected ? "true" : "false";
}

export function getSort<T extends Record<string, unknown>>(
  oldKey: keyof T,
  newKey: keyof T,
  sort: "asc" | "desc",
) {
  if (oldKey === newKey) {
    return sort && sort === "asc" ? "desc" : "asc";
  } else {
    return "asc";
  }
}

export function isSelected(arr: string[], id: string) {
  if (!arr) return false;
  return arr.find((item) => item === id);
}

export function removeDuplicates(stringsArray: string[]): string[] {
  return Array.from(new Set(stringsArray));
}

export function subtractArrays(array1: string[], array2: string[]) {
  return array1.filter((item) => !array2.includes(item));
}

export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
) => {
  const pages = [];
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  // Add first page and ellipsis if needed
  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  // Add pages in range
  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  // Add last page and ellipsis if needed
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  return pages;
};
