import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import MainHeader from "./components/Head/MainHeader";
import MainBody from "./components/Body/MainBody";
import MainFooter from "./components/Foot/MainFooter";

function App() {
  const [Messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessagesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://my-react-3458a-default-rtdb.firebaseio.com/messages.json"
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так!");
      }

      const data = await response.json();

      const loadedMessages = [];

      Object.keys(data).forEach((key) => {
        loadedMessages.push({
          id: key,
          name: data[key].name,
          avatar: data[key].avatar,
          massegeText: data[key].massegeText,
          messegeDate: data[key].messegeDate,
        });
      });

      setMessages(loadedMessages);
    } catch (err) {
      // наполняем ошибку сообщением
      setError(err.message);
      // console.log(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessagesHandler();
  }, [fetchMessagesHandler]);

  const addMessagesHandler = async (message) => {
    fetch("https://my-react-3458a-default-rtdb.firebaseio.com/messages.json", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(message);
  };

  let content = <p>Не найдены фильмы</p>;

  if (Messages.length > 0) {
    content = (
      <MainBody Messages={Messages} addMessagesHandler={addMessagesHandler} />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Загрузка...</p>;
  }

  return (
    <>
      <MainHeader />
      {content}
      {/* <MainBody Messages={Messages} addMessagesHandler={addMessagesHandler} /> */}
      <MainFooter />
    </>
  );
}

export default App;
