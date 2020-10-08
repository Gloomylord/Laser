import React from "react";
import styles from '../styles/Title.module.css'
import cn from 'classnames';

function Title({mainStore}) {

    return (
        <h1 className={styles.title}>
            {'Use laser to change text color'.split('').map((value, i) =>
                <span key={i}
                      data-id={i}
                      style={{ color: '#fff' }}
                      className={cn('letter')}>{value}</span>)}
        </h1>
    )
}

export default Title;
