import { createElement } from '../common';
import { SimpleTableColumn, SimpleTableConfig } from '../types';

export default (dataItem, column) => {
  const { valueProvider } = column;
  const valueType = typeof valueProvider;
  return createElement({
    type: 'td',
    value:
      valueType === 'function'
        ? valueProvider(dataItem, column)
        : dataItem[valueProvider],
  });
};
