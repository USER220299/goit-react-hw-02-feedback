import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.listButtons}>
      {options.map(option => {
        return(
        <li className={css.item} key={option}>
          <button
            key={option}
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      )} )}
    </ul>
  );
};

