import styles from './Pluto.module.css';

/* eslint-disable-next-line */
export interface PlutoProps {}

export function Pluto(props: PlutoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Pluto!</h1>
    </div>
  );
}

export default Pluto;
