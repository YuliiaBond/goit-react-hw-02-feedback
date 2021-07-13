import React from 'react';
import style from './Feedback.module.css'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
        }
    
    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
    
    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    
    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
    
    // countTotal = () => {
    //     this.setState(prevState => ({
    //         total: {good} + {neutral} + {bad},
    //     }))
    // }

        render() {
            return (
                <>
                    <span className={style.title}>Please leave feedback</span>
                    <div className={style.btnList}>
                        <button type="button" onClick={this.handleIncrementGood}>Good</button>
                        <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
                        <button type="button" onClick={this.handleIncrementBad}>Bad</button>
                    </div>
                    <span className={style.title}>Statistics</span>
                    <div className={style.list}>
                        <p>Good: {this.state.good}</p>
                        <p>Neutral: {this.state.neutral}</p>
                        <p>Bad: {this.state.bad}</p>
                        <p>Total: {this.state.total}</p>
                        <p>Positive feedback: 0%</p>
                    </div>
                </>
            );
        }
    }


export default Feedback;
