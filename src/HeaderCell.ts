import { createElement } from '../common';
import { SimpleTableColumn } from '../types';

export default (column: SimpleTableColumn) => {
  return createElement({
    type: 'th',
    value: column.headerText,
  });
};
