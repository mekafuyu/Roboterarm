import styles from "./styles.module.scss";

export default function RAInput({id, label, placeholder}: {id:string, label:string, placeholder:string}){
    return(
        <>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input id={id} className={styles.input} placeholder={placeholder}></input>
        </>
    )
}