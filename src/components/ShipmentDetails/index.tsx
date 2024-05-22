import styles from './style.module.css';
import { formatDate } from '@/utils/formatDate';
import { LANGUAGE } from '@/types/language';
import { SHIPMENT } from '@/types/shipment';
import { useTranslation } from 'react-i18next';
import { ShipmentStatus } from '../ShipmentStatus';

interface Props {
  shipment: SHIPMENT;
}

export function ShipmentDetails({ shipment }: Props) {
  const {
    i18n: { language: lang },
    t,
  } = useTranslation();

  const lastUpdate = formatDate({
    region: lang as LANGUAGE,
    date: shipment.TransitEvents[shipment.TransitEvents.length - 1].timestamp,
    includeDay: true,
    includeTime: true,
    includeWeekDay: true,
  });

  const deliveryDate = formatDate({
    region: lang as LANGUAGE,
    date: shipment.PromisedDate,
    includeDay: true,
  });

  return (
    <div className={styles['details-grid']} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <div className={styles['details-grid__col']}>
        <span>
          {t('detailsBar.shipmentNumber')} {shipment.TrackingNumber}
        </span>
        <ShipmentStatus status={shipment.CurrentStatus.state} />
      </div>
      <div className={styles['details-grid__col']}>
        <span>{t('detailsBar.lastUpdate')}</span>
        <p>{lastUpdate}</p>
      </div>
      <div className={styles['details-grid__col']}>
        <span>{t('detailsBar.merchant')}</span>
        <p>{shipment.provider.toUpperCase()}</p>
      </div>
      <div className={styles['details-grid__col']}>
        <span>{t('detailsBar.deliveryDate')}</span>
        <p>{deliveryDate}</p>
      </div>
    </div>
  );
}
