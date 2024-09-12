import styles from "./styles.module.scss";

import Button from "@mui/material/Button";

export default function ButtonMid() {
    return (
        <Button variant="contained" className={styles.size} >Login</Button>
    );
}