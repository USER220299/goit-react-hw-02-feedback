import css from "./Statistics.module.css"
import { Notification } from './Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
  <div className="statistics">
        <h3 className={css.title}>Statistics</h3>
        {total===0 ?(<Notification message="There is no feedback" />):<ul className={css.listStatistics}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}%</li>
    </ul>}
    
  </div>
    )

};
