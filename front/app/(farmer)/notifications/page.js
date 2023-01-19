"use client";
import React, { useEffect, useState } from "react";
import Notification from "../../../components/cards/Notification";
import notifications from "../../../db/notifications";

function notificationPage() {
  const [userNotifications, setUserNotifications] = useState([]);

  useEffect(function getNotifications() {
    var user = JSON.parse(window.localStorage.getItem("user"));
    var varUserNotifications = notifications.filter(
      (notification) => notification.userIdReceiver == user.userId
    );
    console.log(varUserNotifications);
    console.log(notifications);
    setUserNotifications(varUserNotifications);
  }, []);

  return (
    <>
      {userNotifications.map((notification) => {
        return <Notification notification={notification} />;
      })}
    </>
  );
}

export default notificationPage;
