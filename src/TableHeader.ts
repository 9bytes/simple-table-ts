import { createElement } from '../common';
import { TableColumn } from '../types';
import HeaderCell from './HeaderCell';

export default (columns: TableColumn[]) => {
  return (
    columns !== null &&
    columns.reduce(
      (acc, column) => {
        acc.appendChild(HeaderCell(column));
        return acc;
      },
      createElement({
        type: 'thead',
      })
    )
  );
};
