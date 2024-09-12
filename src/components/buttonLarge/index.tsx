import styles from "./styles.module.scss";

import Button from "@mui/material/Button";

export default function ButtonLarge({ text }: { text: string }) {
    return (
        <Button variant="contained" className={styles.size} >Contained</Button>
    );
}