import { createElement, getDocumentElement } from '../common';
import { TableConfig } from '../types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default (tableComfig: TableConfig) => {
  const { target, columns, data, options } = tableComfig;
  const tableEl = createElement({
    type: 'table',
    id: 'stts-table',
  });
  tableEl.appendChild(TableHeader(columns));
  tableEl.appendChild(TableBody(tableComfig));

  const wrap = createElement({
    type: 'div',
    id: 'stts-wrapper',
  });

  wrap.appendChild(tableEl);
  getDocumentElement(target).appendChild(wrap);
};
