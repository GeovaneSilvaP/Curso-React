import styles from "./Title.module.css";

function Title() {
  return (
    <div>
      <h1 className={styles.title}>Meu título</h1>
      <p className={styles.title_p}>Estou estudando Css no React</p>
    </div>
  )
}

export default Title
