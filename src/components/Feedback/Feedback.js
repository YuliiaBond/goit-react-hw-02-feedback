import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import style from './Feedback.module.css'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
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
    
    // let total = 0;

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }
    
    countPositiveFeedbackPercentage = () => {
        return (this.state.good / this.countTotalFeedback()) *100
    }
    
        render() {
            return (
                <>
                    <span className={style.title}>Please leave feedback</span>
                    
                    <FeedbackOptions
                        handleIncrementGood={this.handleIncrementGood}
                        handleIncrementNeutral={this.handleIncrementNeutral}
                        handleIncrementBad={this.handleIncrementBad}
                    />

                    <span className={style.title}>Statistics</span>

                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage().toFixed(0)}
                    />
                </>
            );
        }
    }


export default Feedback;
