import React from 'react';

import styles from './styles.module.scss'

const Button = ({icon, text}: any) => {
    return (
        <button className={styles.bt__config}>
            {icon} {text}
        </button>
    )
}

export default Button
