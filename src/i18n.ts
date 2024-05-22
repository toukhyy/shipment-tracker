import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          navbar: {
            home: 'Home',
            prices: 'Prices',
            talkToSales: 'Talk to Sales',
            signIn: 'Sign In',
            trackShipment: 'Track Shipment',
          },
          detailsBar: {
            shipmentNumber: 'Shipment number',
            lastUpdate: 'Last update',
            merchant: 'Merchant',
            deliveryDate: 'Delivery date',
            status: {
              delivered: 'Delivered',
              cancelled: 'Cancelled',
              'not-yet-shipped': 'Not Yet Shipped',
            },
          },
          shipmentSteps: {
            shipmentCreated: 'Shipment created',
            processing: 'Processing',
            outForDelivery: 'Out for Delivery',
            delivered: 'Delivered',
          },
        },
      },
      ar: {
        translation: {
          navbar: {
            home: 'الرئيسية',
            prices: 'الاسعار',
            talkToSales: 'كلم المبيعات',
            signIn: 'تسجيل الدخول',
            trackShipment: 'تتبع شحنتك',
          },
          detailsBar: {
            shipmentNumber: 'رقم الشحنة',
            lastUpdate: 'اخر تحديث',
            merchant: 'اسم التاجر',
            deliveryDate: 'موعد التسليم خلال',
            status: {
              delivered: 'تم تسليم الشحنة',
              cancelled: 'تم الغاء الشحنة',
              'not-yet-shipped': 'لم يتم تسليم الشحنة',
            },
          },
          shipmentSteps: {
            shipmentCreated: 'تم انشاء الشحنة',
            processing: 'تم استلام الشحنة من التاجر',
            outForDelivery: 'الشحنة خرجت للتسليم',
            delivered: 'تم التسليم',
          },
        },
      },
    },
  });

export default i18n;
