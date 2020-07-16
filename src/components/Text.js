import React from "react";
import styles from '../styles/Text.module.css';
import {inject, observer} from "mobx-react";

function Text(props) {

    return (
        <p className={styles.text}>
            {props.mainStore.text.map((value, i) =>
                <span key={i}
                      style={{ color: value.defaultColor ? '#fff' : '#ff992f'}}
                      data-id={i}
                      className='letter'>{value.letter + ' '}</span>)}
        </p>
    )
}

export default inject('mainStore')(observer(Text));