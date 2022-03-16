import { createElement } from '../common';
import DataCell from './DataCell';

export default (dataItem, columns) => {
  return (
    columns !== null &&
    columns.reduce(
      (acc, column) => {
        acc.appendChild(DataCell(dataItem, column));
        return acc;
      },
      createElement({
        type: 'tr',
      })
    )
  );
};
