import  styles  from "./Frase.module.css";

export function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <h5 className={styles.fraseContent}>Geovane esta estudando React</h5>
        </div>
    )
}