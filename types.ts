export type SimpleTable = {
  target: string;
  options: SimpleTableOptions;
  columns: SimpleTableColumn[];
  data: Array<object>;
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
  dataField: string | Function;
  dataRype?: string;
  width?: number;
  sorting?: true;
};
