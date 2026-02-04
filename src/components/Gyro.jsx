import { useState } from "react";
import styles from '../styles/Gyro.module.css'

function Gyro(props) {
    const [angle, setAngle] = useState(props.angle);
    const ticks = Array.from({length:36})
    return (
        <>
            <div className={styles.compass} style={{"--size":`${Math.max(props.size, 300)}px`}}>

                {ticks.map((_,i)=>{
                    const t_angle = i * 10;
                    const isMajor = t_angle % 90 === 0;
                    return (
                        <div
                        key={i}
                        className={`${styles.tick} ${isMajor ? styles.tickMajor : ''}`}
                        style={{"--tick_angle":`${t_angle}deg`,
                                "--size":`${Math.max(props.size/2, 150) }px`    
                            }}
                        />
                    );
                })}
                <div className={styles.triangle_arrow}
                    style={{'--angle':`${-angle}deg`}}
                >
                </div>
            </div>
        </>
    )
}

export default Gyro;