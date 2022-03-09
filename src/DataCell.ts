import { createElement } from '../common';
import { SimpleTableColumn, SimpleTableConfig } from '../types';

export default (dataItem, column) => {
  const { dataValue } = column;
  const valueType = typeof dataValue;
  return createElement({
    type: 'td',
    value:
      valueType === 'function'
        ? dataValue(dataItem, column)
        : dataItem[dataValue],
  });
};
