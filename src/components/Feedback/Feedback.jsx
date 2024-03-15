/* eslint-disable react/prop-types */
import clsx from "clsx";
import css from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, totalPercentageFeedback }) => {
  return (
    <ul className={clsx(css.reviewsList)}>
      <li className={clsx(css.reviewsItem)}>Good : {reviews.good}</li>
      <li className={clsx(css.reviewsItem)}>Neutral : {reviews.neutral}</li>
      <li className={clsx(css.reviewsItem)}>Bad : {reviews.bad}</li>
      <li className={clsx(css.reviewsItem)}>Total reviews : {totalFeedback}</li>
      <li className={clsx(css.reviewsItem)}>
        Total positive percentage : {totalPercentageFeedback}%
      </li>
    </ul>
  );
};

export default Feedback;
