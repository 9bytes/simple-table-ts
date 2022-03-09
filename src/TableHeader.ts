import { createElement } from '../common';
import { SimpleTableColumn } from '../types';
import HeaderCell from './HeaderCell';

export default (columns: SimpleTableColumn[]) => {
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
