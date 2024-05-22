import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

export function ShipmentStatus({ status }: { status: string }) {
  const { t } = useTranslation();

  const STATUSES_STYLES = {
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
    NOT_YET_SHIPPED: 'not-yet-shipped',
  };

  const STATUS_NAME = {
    DELIVERED: t('detailsBar.status.delivered'),
    CANCELLED: t('detailsBar.status.cancelled'),
    NOT_YET_SHIPPED: t('detailsBar.status.not-yet-shipped'),
  };

  return (
    <p
      className={
        styles[
          `status--${STATUSES_STYLES[status as keyof typeof STATUSES_STYLES]}`
        ]
      }
    >
      {STATUS_NAME[status as keyof typeof STATUS_NAME]}
    </p>
  );
}
