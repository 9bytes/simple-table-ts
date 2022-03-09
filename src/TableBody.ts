import { createElement } from '../common';
import { SimpleTableConfig } from '../types';
import DataCell from './DataCell';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default (config: SimpleTableConfig) => {
  const { columns, data: tblData } = config;
  return (
    tblData !== null &&
    tblData.reduce((acc: HTMLElement, item) => {
      acc.appendChild(TableRow(item, columns));
      return acc;
    }, createElement({ type: 'tbody' }))
  );
};
