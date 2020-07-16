import React from "react";
import styles from '../styles/Title.module.css'
import {inject, observer} from "mobx-react";
import cn from 'classnames';


function Title({mainStore}) {

    return (
        <h1 className={styles.title}>
            {mainStore.title.map((value, i) =>
                <span key={i}
                      data-id={i}
                      style={{ color: value.defaultColor ? '#fff' : '#ff992f'}}
                      className={cn('letter')}>{value.letter}</span>)}
        </h1>
    )
}

export default inject('mainStore')(observer(Title));