import React from 'react';
import { Card } from 'antd';
import styles from './CustomCard.module.scss';

const CustomCard = ({ children, height, width, className, style }) => {
    return (
        <Card id={styles["custom_card"]} style={{
            height,
            width,
            ...style,
        }}
            className={className}
        >
            {children}
        </Card>
    )
}

export default CustomCard;