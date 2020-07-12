import React, {useCallback, useEffect, useRef} from "react";
import styles from '../styles/Laser.module.css';
import {TimelineMax} from 'gsap';


const Laser = React.forwardRef(function (props, ref) {
    let laser = useRef(null);
    let foundation = useRef(null);
    let ray = useRef(null);
    let container = useRef(null);
    let wave = useRef(null);

    useEffect(() => {
        let positionAnimate = new TimelineMax();
        positionAnimate.pause();
        let stages = laser.current.children;

        document.addEventListener('mousemove', (e) => {
            const origin = container.current;
            let x = origin.getBoundingClientRect().left + origin.clientWidth / 2;
            let y = origin.getBoundingClientRect().top + origin.clientHeight / 2;
            let radian = Math.atan2(e.clientX - x, e.clientY - y);
            let rot = -radian * 180 / Math.PI;
            origin.style.transform = `rotate(${rot}deg)`;
            ray.current.style.height = Math.sqrt((e.clientX - x) ** 2 + (e.clientY - y) ** 2) + 5 + 'px';
            wave.current.style.top = Math.sqrt((e.clientX - x) ** 2 + (e.clientY - y) ** 2) +   'px';
        });

        positionAnimate.to(foundation.current, {
            ease: 'sine',
            background: '#7a1610',
            duration: .3
        });

        Array.from(stages).forEach((stage) => {
            positionAnimate.to(stage, {
                background: '#ff992f',
                ease: 'linear',
                duration: .2
            });
        });

        positionAnimate.to(laser.current, {
            ease: 'linear',
            borderBottom: '5px solid #ff3219',
            duration: .3
        });

        positionAnimate.set(ray.current, {
            display: 'block',
        });
        positionAnimate.set(wave.current, {
            display: 'block',
        });

        document.addEventListener('mousedown', (e) => {
            positionAnimate.reversed(false).play();
        });

        document.addEventListener('mouseup', (e) => {
            positionAnimate.reverse();
        });
    }, []);

    const onDragStart = useCallback((e) => e.preventDefault(), []);

    return (
        <div ref={container} className={styles.container} onDragStart={onDragStart}>
            <div ref={laser} className={styles.laser} onDragStart={onDragStart}>
                {
                    Array.from({length: 5}).map((_, i) => <div key={i} className={styles.stage}/>)
                }
            </div>
            <div ref={wave} className={styles.wave}/>
            <div ref={foundation} className={styles.foundation} onDragStart={onDragStart}/>
            <div ref={ray} className={styles.ray} onDragStart={onDragStart}/>
        </div>
    )
});


export default Laser;
