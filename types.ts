export type SimpleTableConfig = {
  target: string;
  options: SimpleTableOptions;
  columns: SimpleTableColumn[];
  data: any[];
};

export type SimpleTableOptions = {
  header?: SimpleTableHeader;
};

export type SimpleTableHeader = {
  left?: HTMLElement;
  right?: HTMLElement;
};

export type SimpleTableColumn = {
  headerText: string;
  dataValue: string | ((dataItem: any, column: SimpleTableColumn) => string);
  dataRype?: string;
  width?: number;
  sorting?: true;
};
