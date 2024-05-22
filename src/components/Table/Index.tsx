/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { nanoid } from 'nanoid';
import { returnClass } from '@/utils/returnClass';
import styles from './style.module.css';

interface TableProps {
  data?: any;
  classPrefix?: string;
  headerRowClass?: string;
  children?: ReactNode;
}

export const Table = ({
  data,
  classPrefix = '',
  headerRowClass = '',
  children,
}: TableProps) => {
  const headers = Object.keys(data?.[0]);
  return (
    <div className="table-container">
      <table
        className={`${styles['table']} ${returnClass(classPrefix, 'table')}`}
      >
        <thead>
          <tr className={`${styles['table-head']} ${headerRowClass}`.trimEnd()}>
            {/* data headers */}
            {headers.map((header) => (
              <th key={nanoid()} className={returnClass(classPrefix, header)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      {!data && <p className={styles['table-message']}>No data available.</p>}
    </div>
  );
};

interface TableRowProps {
  classPrefix?: string;
  item: any;
  rowClass?: string;
  renderCell: (item: JSX.Element) => JSX.Element;
}

export const TableRow = ({
  item,
  classPrefix = '',
  rowClass = '',
  renderCell,
}: TableRowProps) => {
  return (
    <tr className={`${styles['table-row']} ${rowClass}`.trimEnd()}>
      {Object.keys(item).map((key) => (
        <td key={nanoid()} className={returnClass(classPrefix, key)}>
          {renderCell(item[key])}
        </td>
      ))}
    </tr>
  );
};
