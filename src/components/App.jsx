import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickGoodBtn = (e) => {
   return this.setState({[e]: this.state[e] +1});
  // this.setState(prevState => {
  //     return { neutral: (prevState.neutral += 1) };
  // });
  //     this.setState(prevState => {
  //     return { bad: (prevState.bad += 1) };
  //   });
  };

  
  countTotalFeedback({ good, neutral, bad }) {
    return good+neutral+bad
  }
  countPositiveFeedbackPercentage() {
    return (Math.round((this.state.good * 100) / (this.countTotalFeedback(this.state))))
  }
 
  render() {
       
    return (
      <div>
        <Section title="Please leave feedback"> </Section>
        <FeedbackOptions
          options = {Object.keys(this.state)}
          
          onLeaveFeedback={this.clickGoodBtn }
          
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>

    );
  }

  // return (
  //  <div>
  // //     <Section title=""/>
  // //     <FeedbackOptions options={2 } onLeaveFeedback={ 1}/>
  // //     <Statistics  good={2} neutral={ 2} bad={2} total={2} positivePercentage={2}/>
  // //     {/* <Notification message="There is no feedback"></Notification> */}
  // //   </div>
  //
  // )
}
