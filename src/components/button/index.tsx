import React from 'react';
import styles from './styles.module.scss'

const Button = ({icon, text, onClick, className}: any) => {
    return (
        <button className={className} onClick={onClick}>
            {icon} {text}
        </button>
    )
}

export default Button
