import React from "react";
import styles from '../styles/Title.module.css'

const text = 'Use laser to change text color';

function Title() {

    return (
        <h1 className={styles.title}>
            {text.split('').map((letter, i)=> <span key={i} className='letter'>{letter}</span>)}
        </h1>
    )
}

export default Title;