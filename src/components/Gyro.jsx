import { useState } from "react";
import styles from "../styles/Gyro.module.css";

function Gyro({ angle, size = 200 }) {
  const [Angle, setAngle] = useState(angle);
  const ticks = Array.from({ length: 36 });
  return (
    <div className="flex flex-col items-center">
      
      <div
        className={styles.compass}
        style={{ "--size": `${Math.max(size, 200)}px` }}
      >
        {ticks.map((_, i) => {
          const t_angle = i * 10;
          const isMajor = t_angle % 90 === 0;
          return (
            <div
              key={i}
              className={`${styles.tick} ${isMajor ? styles.tickMajor : ""}`}
              style={{
                "--tick_angle": `${t_angle}deg`,
                "--size": `${Math.max(size,200)}px`,
              }}
            />
          );
        })}
        <div
          className={styles.triangle_arrow}
          style={{ "--angle": `${-angle}deg` }}
        ></div>
      </div>

      <div className="flex justify-center bg-white w-1/2  relative mt-3 border-2 rounded">
        <p className="flex text-pink-600 font-bold text-xl">{Angle}</p>
      </div>
    </div>
  );
}

export default Gyro;
