import styles from "./styles.module.scss";

import Button from "@mui/material/Button";

export default function ButtonLarge() {
    return (
        <Button variant="contained" className={styles.size} >Contained</Button>
    );
}