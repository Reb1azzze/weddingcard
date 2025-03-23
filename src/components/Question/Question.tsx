import React from 'react';
import styles from './Question.module.scss'

interface QuestionProps {
    text: string;
}

const Question = (props:QuestionProps) => {
    return (
        <div className={styles.question}>
            {props.text}
        </div>
    );
};

export default Question;