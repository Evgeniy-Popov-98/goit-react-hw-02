/* eslint-disable react/prop-types */
import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <>
      <div className={clsx(css.containerButton)}>
        <button
          className={clsx(css.button)}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          className={clsx(css.button)}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          className={clsx(css.button)}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
        {totalFeedback !== 0 && (
          <button className={clsx(css.button)} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Options;
