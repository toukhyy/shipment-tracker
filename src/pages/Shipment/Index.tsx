/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShipmentDetails } from '@/components/ShipmentDetails';
import { ShipmentSteps } from '@/components/ShipmentSteps';
import data from '@/assets/1.json';
import { SHIPMENT } from '@/types/shipment';
import { Table, TableRow } from '@/components/Table/Index';
import { table_en, table_ar } from '@/assets/table-data';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

export function ShipmentPage() {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const table = lang == 'en' ? table_en : table_ar;

  return (
    <main className={styles['container']}>
      <section className={styles['shipment-details-section']}>
        <ShipmentDetails shipment={data as SHIPMENT} />
        <div className={styles['shipment-details-section__divider']}></div>
        <ShipmentSteps shipment={data as SHIPMENT} />
      </section>

      {/* <ShipmentSteps /> */}
      <section
        dir={lang === 'en' ? 'ltr' : 'rtl'}
        className={styles['shipment-table-section']}
      >
        <div className={styles['shipment-table-section__table__container']}>
          <h2 className={styles['shipment-table-section__header']}>
            {t('tableSection.shipmentDetails')}
          </h2>
          <div className={styles['shipment-table-section__table']}>
            <Table classPrefix="data" data={table}>
              {table.map((event: any) => {
                return (
                  <TableRow
                    classPrefix={'table-row'}
                    item={event}
                    renderCell={(item: JSX.Element) => item}
                  />
                );
              })}
            </Table>
          </div>
        </div>
        <div
          className={styles['shipment-table-section__contact__container']}
        ></div>
      </section>
    </main>
  );
}
