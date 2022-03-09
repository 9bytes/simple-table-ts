import { createElement, getDocumentElement } from '../common';
import { SimpleTableConfig } from '../types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default (sTable: SimpleTableConfig) => {
  const { target, columns, data, options } = sTable;
  const tableEl = createElement({
    type: 'table',
    id: 'stts-table',
  });
  tableEl.appendChild(TableHeader(columns));
  tableEl.appendChild(TableBody(sTable));

  const wrap = createElement({
    type: 'div',
    id: 'stts-wrapper',
  });

  wrap.appendChild(tableEl);
  getDocumentElement(target).appendChild(wrap);
};
