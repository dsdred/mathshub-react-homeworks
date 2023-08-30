import React from "react";

import "./MainBody.css";
import LeftForm from "./LeftForm";

import BodyWelcome from "./BodyWelcome";
import BodyMessegeForm from "./BodyMessegeForm";
import MessageList from "./MessegeList";

function MainBody({ Messages, addMessagesHandler }) {
  return (
    <div className="bodyStyle">
      <LeftForm />
      <div className="bodyMessageContayner">
        <BodyWelcome />
        <BodyMessegeForm addMessagesHandler={addMessagesHandler} />
        <MessageList Messages={Messages} />
      </div>
    </div>
  );
}

export default MainBody;
