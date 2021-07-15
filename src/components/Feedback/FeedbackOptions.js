import React from 'react';
import style from './Feedback.module.css'

const FeedbackOptions = ({handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => (
    <div className={style.btnList}>
        <button type="button" onClick={handleIncrementGood}>Good</button>
        <button type="button" onClick={handleIncrementNeutral}>Neutral</button>
        <button type="button" onClick={handleIncrementBad}>Bad</button>
    </div>
);

export default FeedbackOptions;