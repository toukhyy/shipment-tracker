import { SHIPMENT } from '@/types/shipment';
import { StepProps } from 'antd';
import { useTranslation } from 'react-i18next';

export function useReturnSteps(shipment: SHIPMENT) {
  let currentStep = 0;
  const { t } = useTranslation();

  const STATUSES = {
    DELIVERED: 'finish',
    CANCELLED: 'error',
    NOT_YET_SHIPPED: 'process',
  };

  const steps = [
    {
      title: t('shipmentSteps.shipmentCreated'),
      status: 'error',
    },
    {
      title: t('shipmentSteps.processing'),
      status: 'error',
    },
    {
      title: t('shipmentSteps.outForDelivery'),
      status: 'finish',
    },
    {
      title: t('shipmentSteps.delivered'),
      status: 'finish',
    },
  ];

  // Determine slider current step
  shipment.TransitEvents.forEach((event, i) => {
    if (event.state === 'TICKET_CREATED' && i == 0) currentStep = 0;
    if (event.state === 'PACKAGE_RECEIVED') currentStep = 1;
    if (event.state === 'OUT_FOR_DELIVERY') currentStep = 2;
    if (event.state === 'DELIVERED') currentStep = 3;
  });

  // change color based on status and current status

  const modifiedSteps = steps.map((step, i) => ({
    ...step,
    status:
      i <= currentStep
        ? STATUSES[shipment.CurrentStatus.state as keyof typeof STATUSES]
        : 'wait',
  })) as StepProps[];

  return { currentStep, steps: modifiedSteps };
}
