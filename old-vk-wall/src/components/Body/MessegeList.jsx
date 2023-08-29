import React from "react";

import "./MessageList.css";

// import av1 from "./avatars/m1.jpg";

function MessageList() {
  return (
    <section className="messageListContayner">
      <div className="messageListItemBody">
        <img
          className="messageListAvatar"
          src="./avatars/m1.jpg"
          alt="Аватар"
        />
        <div className="messageListTextContayner">
          <b className="messageListTextName">Имя</b>
          <p>Текст Сообщения ;2</p>
          <div className="messagelistTextFootContayner">
            <div className="messagelistTextFootLeft">
              <b className="messagelistTextFootLeftData">22 фев 2009</b>
              <div className="leftBoarder">Комментировать</div>
              <div className="leftBoarder">Тет-а-тет</div>
            </div>

            <b className="iLikeIt">Мне нравится ♥</b>
          </div>
        </div>
      </div>

      <div className="messageListItemBody">
        <img
          className="messageListAvatar"
          src="./avatars/m1.jpg"
          alt="Аватар"
        />
        <div className="messageListTextContayner">
          <b className="messageListTextName">Имя</b>
          <p>Текст Сообщения ;)</p>
          <div className="messagelistTextFootContayner">
            <div className="messagelistTextFootLeft">
              <b className="messagelistTextFootLeftData">22 фев 2009</b>
              <div className="leftBoarder">Комментировать</div>
              <div className="leftBoarder">Тет-а-тет</div>
            </div>

            <b className="iLikeIt">Мне нравится ♥</b>
          </div>
        </div>
      </div>

      <div className="messageListItemBody">
        <img
          className="messageListAvatar"
          src="./avatars/m1.jpg"
          alt="Аватар"
        />
        <div className="messageListTextContayner">
          <b className="messageListTextName">Имя</b>
          <p>Текст Сообщения ;) ddddd</p>
          <div className="messagelistTextFootContayner">
            <div className="messagelistTextFootLeft">
              <b className="messagelistTextFootLeftData">22 фев 2009</b>
              <div className="leftBoarder">Комментировать</div>
              <div className="leftBoarder">Тет-а-тет</div>
            </div>

            <b className="iLikeIt">Мне нравится ♥</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageList;
