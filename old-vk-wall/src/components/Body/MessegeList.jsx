import React from "react";

import "./MessageList.css";

// import av1 from "../../../public/avatars/m1.jpg";

function MessageList({ Messages }) {
  return (
    <div className="messageListContayner">
      {Messages.map((message) => (
        <div className="messageListItemBody" key={message.id}>
          <img
            className="messageListAvatar"
            src={message.avatar}
            alt="Аватар"
          />
          <div className="messageListTextContayner">
            <b className="messageListTextName">{message.name}</b>
            <p>{message.massegeText}</p>
            <div className="messagelistTextFootContayner">
              <div className="messagelistTextFootLeft">
                <b className="messagelistTextFootLeftData">
                  {message.messegeDate}
                </b>
                <div className="leftBoarder">Комментировать</div>
                <div className="leftBoarder">Тет-а-тет</div>
              </div>

              <b className="iLikeIt">Мне нравится ♥</b>
            </div>
          </div>
        </div>
      ))}
      <div className="smallSpace"></div>
    </div>
  );
}

export default MessageList;
