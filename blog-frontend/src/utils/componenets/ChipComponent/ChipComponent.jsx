import React from 'react';
import styles from './ChipComponent.module.scss'

function ChipComponent(props) {
    console.log(props.color)
    var color = props.color;

    return (
        <div style={{
            '--chip-color': props.color,
        }}  className={styles.chipContainer}>
            <p className={styles.chipTitle}>{props.title}</p>
        </div>
    );
}

export default ChipComponent;