import React from 'react';
import styles from './Button.module.css';
import './button.css';

export interface ButtonProps {
    label: string;
}


const Button = (props: ButtonProps) => {
    return <button className={"button"}>{props.label}</button>;
};

export default Button;