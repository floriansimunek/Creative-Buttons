import styles from './Button2.module.css';

function Button2() {
  return (
    <button className={styles.button}>
      <p className={styles.mainText}>My Button</p>
      <p className={styles.secondaryText}>My Button</p>
    </button>
  );
}

export default Button2;
