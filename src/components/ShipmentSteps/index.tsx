import './style.css';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';
// import data from '@/assets/3.json';
import { SHIPMENT } from '@/types/shipment';
import { useReturnSteps } from '@/hooks/useReturnSliderSteps';

interface Props {
  shipment: SHIPMENT;
}

export function ShipmentSteps({ shipment }: Props) {
  const {
    i18n: { language: lang },
  } = useTranslation();

  const { currentStep, steps } = useReturnSteps(shipment);

  return (
    <Steps
      current={currentStep}
      labelPlacement="vertical"
      size="small"
      style={{
        direction: lang === 'en' ? 'ltr' : 'rtl',
      }}
      items={steps}
    />
  );
}
