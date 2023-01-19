import React from "react";

function Notification(notification) {
  // console.log(notification.notification);
  return (
    <div className="grid grid-cols-6 gap-4 bg-[#F6FFEA] mx-16 rounded-md drop-shadow-md mb-10">
      <div>
        <img src="/user1.png" alt="user1" className="p-4" />
      </div>

      <div className="flex flex-col col-span-4">
        <h3 className="font-semibold text-lg">{notification.notification.owner}</h3>
        <p>{notification.notification.description}</p>
        <div className="font-semibold text-lg ">
          <p className="mt-5">
            Budget{" "}
            <span className="mx-5 text-greenText"> {notification.notification.budget}</span>
          </p>
        </div>
      </div>
      <div className="m-auto">
        <button>
          <img src="/check.png" alt="check" />
        </button>
        <button className="ml-5">
          <img src="/xmark.png" alt="xmark" />
        </button>
      </div>
    </div>
  );
}

export default Notification;
