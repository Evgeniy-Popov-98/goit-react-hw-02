import clsx from "clsx";
import css from "./Notification.module.css";

const Notification = () => {
  return (
    <>
      <p className={clsx(css.textNotification)}>No Feedback yet</p>
    </>
  );
};

export default Notification;
