import React from "react";
// import ToDoItem from "./SendList";

function SendList({ sends }) {
  return (
    <div className="send-list">
      {sends.map((send) => (
        <div key={send.id}>
          {send.id} {send.firstNameRecipient} {send.addressRecipient}
        </div>
      ))}
    </div>
  );
}

export default SendList;
