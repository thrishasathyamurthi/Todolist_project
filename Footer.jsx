import styles from "./footer.module.css";
export default function Footer({ completedTodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>CompletedTodos:{completedTodos}</span>
      <span className={styles.item}>Total todos:{totaltodos}</span>
    </div>
  );
}
