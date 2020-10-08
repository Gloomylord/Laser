import React from "react";
import styles from '../styles/Text.module.css';
import obj from './lorem';

function Text() {
    return (
        <p className={styles.text}>
            {obj.text.split('').map((value, i) =>
                <span key={i}
                      style={{ color:  '#fff' }}
                      className='letter'>{value}</span>)}
        </p>
    )
}

export default Text;