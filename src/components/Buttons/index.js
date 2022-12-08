import React from 'react';
import { Button } from 'antd';

//constants 

//hooks

//utils

//widgets


import styles from './arcs_buttons.module.scss'


const Primary = ({ children, ...props }) => {
    // console.log({ arcs_buttons: styles })
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['primary']} ${props.className || ''}`}>{children}</Button>
    )
}

const PrimaryDashed = ({ children, ...props }) => {
    // console.log({ arcs_buttons: styles })
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['primary_dashed']} ${props.className || ''}`}>{children}</Button>
    )
}



const PrimaryOutline = ({ children, ...props }) => {
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['primary_outlined']} ${props.className}`}>{children}</Button>
    )
}


const PrimaryLink = ({ children, ...props }) => {
    // console.log({ arcs_buttons: styles })
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['transparent_bg']} ${props.className || ''}`}>{children}</Button>
    )
}


const DangerOutlined = ({ children, ...props }) => {
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['danger_outlined']} ${props.className || ''}`}>{children}</Button>
    )
}

const DangerPrimary = ({ children, ...props }) => {
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['danger_primary']} ${props.className || ''}`}>{children}</Button>
    )
}

const DangerLink = ({ children, ...props }) => {
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['danger_link']} ${props.className || ''}`}>{children}</Button>
    )
}


const AddAnnouncement = ({ children, ...props }) => {
    return (
        <Button {...props} id={`${props.id || ''}`} className={`${styles['danger_link']} ${props.className || ''}`}>{children}</Button>
    )
}

export {
    PrimaryOutline,
    PrimaryDashed,
    PrimaryLink,

    DangerOutlined,
    DangerPrimary,
    DangerLink,

    AddAnnouncement,
}
export default Primary;