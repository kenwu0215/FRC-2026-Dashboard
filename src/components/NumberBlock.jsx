import { useEffect, useState } from "react";
import styles from '../styles/NumBlock.module.css'

function NumberBlock({label="Heading", data=0}){
    const [value, setValue] = useState();
    useEffect(()=>{
        setValue(data)
    },[]);
    return(
       <div className={styles.wrapper}>
            {/* 上方的名稱格子 */}
            <div className={styles.title_tag}>
                {label}
            </div>
            
            {/* 主體數字格子 */}
            <div className={styles.num_block_container}>
                <p className={styles.number_text}>
                    {Number(value).toFixed(3)}
                </p>
            </div>
        </div>
    );
}

export default NumberBlock;