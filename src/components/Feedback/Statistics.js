import React from 'react';
// import PropTypes from 'prop-tepes'
import style from './Feedback.module.css'



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <div className={style.list}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage} %</p>
        </div>
    </>
);

export default Statistics;

// Statistics.default = {
//     Statistics: <p>No feedback given</p>,
// };

// Statistics.prototype = {
//     Statistics: PropTypes.string,
// }