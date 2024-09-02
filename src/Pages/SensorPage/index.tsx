import styles from "./styles.module.scss";
import bg2 from '/bg2.svg'
import arm from '/Robotic arm.png'
import RAInput from "../../components/ra_input";

export default function SensorPage() {

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div className={styles.inputs}>
                        <RAInput id="1" label="Pos. X" placeholder="0"></RAInput>
                        <RAInput id="2" label="Pos. Y" placeholder="0"></RAInput>
                        <RAInput id="3" label="Pos. Z" placeholder="0"></RAInput>
                    </div>
                    <div className={styles.inputs}>
                        <RAInput id="1" label="Rot. X" placeholder="0"></RAInput>
                        <RAInput id="2" label="Rot. Y" placeholder="0"></RAInput>
                        <RAInput id="3" label="Rot. Z" placeholder="0"></RAInput>
                    </div>
                    <div className={styles.inputs}>
                        <RAInput id="1" label="Muscl" placeholder="0"></RAInput>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.board}>
                        <img src={arm} alt="" />
                    </div>
                </div>
            </div>
            <img src={bg2} className={styles.bg} alt="bg2" />
        </div>
    );
}