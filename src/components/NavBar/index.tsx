/// <reference types="vite-plugin-svgr/client" />
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import BostaEnLogo from '@/assets/bosta-en.svg?react';
import BostaArLogo from '@/assets/bosta-ar.svg?react';
import { ChangeEvent } from 'react';

export function NavBar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <nav className={styles['navbar']} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <div className={styles['navbar__container']}>
        {lang === 'en' ? (
          <a href="https://bosta.co/en-eg/home">
            <BostaEnLogo />
          </a>
        ) : (
          <a href="https://bosta.co/ar-eg/home">
            <BostaArLogo />
          </a>
        )}

        <ul className={styles['navbar__middle-menu']}>
          <li>{t('navbar.home')}</li>
          <li>{t('navbar.prices')}</li>
          <li>{t('navbar.talkToSales')}</li>
        </ul>

        <ul className={styles['navbar__corner-menu']}>
          <li>{t('navbar.trackShipment')}</li>
          <li>{t('navbar.signIn')}</li>
          <LanguageSelector />
        </ul>
      </div>
    </nav>
  );
}

function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    document.documentElement.lang = i18n.language;
  };

  return (
    <select
      value={i18n.language}
      className={styles['navbar__corner-menu__translation']}
      name="language"
      aria-labelledby="select language"
      onChange={handleChange}
    >
      <option value="en">{t('navbar.language.en')}</option>
      <option value="ar">{t('navbar.language.ar')}</option>
    </select>
  );
}
