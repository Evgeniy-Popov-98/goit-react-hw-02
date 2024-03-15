import { useEffect, useState } from "react";
// import { useState } from "react";
import "./App.css";

import Description from "./assets/components/Description/Description";
import Options from "./assets/components/Options/Options";
import Feedback from "./assets/components/Feedback/Feedback";
import Notification from "./assets/components/Notification/Notification";

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

  const [isVisibleReview, setIsVisibleReview] = useState(false);

  const updateFeedback = (feedbackType) => {
    // if (drinks[drinkName] === 2 && drinkName === "beer") {
    //   alert("Sorry, you excedded the beer limit. Please choose another drink!");
    //   return;
    // }
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const totalFeedback = Object.values(reviews).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    localStorage.setItem("reviewsValues", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback ? <Feedback reviews={reviews} /> : <Notification />}
    </>
  );
}

export default App;
