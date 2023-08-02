import React from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  // eslint-disable-next-line no-unused-vars
  const userData = {
    name: "Дмитрий Сидоренко",
    bio: "Более 16 лет занимаюсь разработкой. Вхожу в топ 50 авторов сайта Infostart.ru",
    quote: "День, когда вы перестаете учиться, должен быть днем вашей смерти.",
    hobbies: ["Программирование", "Книги", "Пишу статьи", "Собираю Lego"],
    imageURL: "https://avatars.githubusercontent.com/u/67696364?v=4",
  };

  return <Profile userData={userData} />;
}

export default App;
