/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShipmentDetails } from '@/components/ShipmentDetails';
import { ShipmentSteps } from '@/components/ShipmentSteps';
import { SHIPMENT } from '@/types/shipment';
import { Table, TableRow } from '@/components/Table/Index';
import { table_en, table_ar } from '@/assets/table-data';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import { nanoid } from 'nanoid';
import Loader from '@/components/Loader/Index';
import { useParams } from 'react-router-dom';
import { useGetShipment } from '@/hooks/useGetShipment';

export function ShipmentPage() {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  const table = lang == 'en' ? table_en : table_ar;

  const { code } = useParams();

  const { data, isLoading } = useGetShipment(code!);

  if (isLoading) return <Loader />;
  if (data.status === 'Not Found.')
    return (
      <p>
        Please make sure to use one of the following ids 84043113, 3468570,
        40106705
      </p>
    );

  return (
    <main className={styles['container']}>
      <section className={styles['shipment-details-section']}>
        <ShipmentDetails shipment={data as SHIPMENT} />
        <div className={styles['shipment-details-section__divider']}></div>
        <ShipmentSteps shipment={data as SHIPMENT} />
      </section>

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
                    key={nanoid()}
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
