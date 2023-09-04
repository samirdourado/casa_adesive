import React from "react";

import styles from './styles.module.scss'

const Button = ({icon, text}: any) => {
    return (
        <button className={styles.container}>
            {icon} {text}
        </button>
    )
}

export default Button
