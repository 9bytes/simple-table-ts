export type TableConfig = {
  target: string;
  options: TableOptions;
  columns: TableColumn[];
  data: any[];
};

export type TableOptions = {
  header?: TableHeader;
};

export type TableHeader = {
  left?: HTMLElement;
  right?: HTMLElement;
};

export type TableColumn = {
  headerText: string;
  valueProvider: string | ((dataItem: any, column: TableColumn) => string);
  dataRype?: string;
  width?: number;
  sorting?: true;
};
