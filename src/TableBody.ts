import { createElement } from '../common';
import { TableConfig } from '../types';
import TableRow from './TableRow';

export default (config: TableConfig) => {
  const { columns, data: tblData } = config;
  return (
    tblData !== null &&
    tblData.reduce((acc: HTMLElement, item) => {
      acc.appendChild(TableRow(item, columns));
      return acc;
    }, createElement({ type: 'tbody' }))
  );
};
