import { LANGUAGE } from '@/types/language';

type FormatDateProps = {
  region: LANGUAGE;
  date: string | number;
  includeDay?: boolean;
  includeWeekDay?: boolean;
  includeTime?: boolean;
};

export function formatDate({
  region,
  date,
  includeDay = false,
  includeWeekDay = false,
  includeTime = false,
}: FormatDateProps) {
  const langFormat = {
    en: 'en-US',
    ar: 'ar-EG',
  };

  return new Date(date).toLocaleDateString(langFormat[region], {
    year: 'numeric',
    month: 'long',
    ...(includeWeekDay && { weekday: 'long' }),
    ...(includeDay && { day: '2-digit' }),
    ...(includeTime && { hour: '2-digit', minute: '2-digit' }),
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales
