import styles from './Button3.module.css';

function Button3() {
  return (
    <button className={styles.button}>
      <span className={styles.fakeText}>My Button</span>
      <div className={styles.track}>
        <span className={styles.text}>My Button</span>
        <span className={styles.text}>My Button</span>
        <span className={styles.text}>My Button</span>
        <span className={styles.text}>My Button</span>
      </div>
      <p className={styles.slideUpText}>
        <span>M</span>
        <span>y</span>
        <span>&nbsp;</span>
        <span>B</span>
        <span>u</span>
        <span>t</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
      </p>
    </button>
  );
}

export default Button3;
