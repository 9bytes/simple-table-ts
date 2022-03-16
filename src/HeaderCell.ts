import { createElement } from '../common';
import { TableColumn } from '../types';

export default (column: TableColumn) => {
  return createElement({
    type: 'th',
    value: column.headerText,
  });
};
