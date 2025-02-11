interface Column<T> {
  key?: keyof T;
  label: string | JSX.Element;
  type?:
    | "string"
    | "boolean"
    | "image"
    | "action"
    | "date"
    | "description"
    | "input";
  inputProps?: CustomFormeElementProps;
  RowAction?: (props: { item: T }) => JSX.Element;
  action?: (item: T) => Promise<Result>;
}
