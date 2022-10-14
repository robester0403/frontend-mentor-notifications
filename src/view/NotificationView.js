import React from "react";
import "./NotificationView.scss";

const NotificationView = () => {
  return (
    <div className="notification">
      <section className="notification__header">
        <div>
          <strong>Notifications</strong>
          <div className="notification__count">3</div>
        </div>
        <div>Mark all as read</div>
      </section>
    </div>
  );
};

export default NotificationView;
