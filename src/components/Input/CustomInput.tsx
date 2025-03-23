import React from 'react';
import styles from './CustomInput.module.scss'
import { Input } from "antd";

interface InputProps {
    onInputChange: (value:string) => void;
}

const CustomInput = (props: InputProps) => {
    return (
        <Input className={styles.input} onChange={(e) => props.onInputChange(e.target.value)}/>
    );
};



export default CustomInput;