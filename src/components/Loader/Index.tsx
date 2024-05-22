import styles from './style.module.css';
export default function Loader() {
  return (
    <div className={styles['loader']}>
      <div className={styles['loader__ring']}></div>
    </div>
  );
}
