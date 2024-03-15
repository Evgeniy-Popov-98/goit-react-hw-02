import { useEffect, useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const reviewsObject = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [reviews, setReviews] = useState(() => {
    const stringifiedReviews = localStorage.getItem("reviewsValues");
    const parsedReviews = JSON.parse(stringifiedReviews) ?? reviewsObject;
    return parsedReviews;
  });

  const updateFeedback = (feedbackType) => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const totalFeedback = Object.values(reviews).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const totalPercentageFeedback = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setReviews(reviewsObject);
  };

  useEffect(() => {
    localStorage.setItem("reviewsValues", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          totalPercentageFeedback={totalPercentageFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
