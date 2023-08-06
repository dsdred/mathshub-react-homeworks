import React, { useState } from "react";
import "./App.css";
import SongRequestForm from "./components/SongRequestForm";
import SongList from "./components/SongList";
import Header from "./components/Header";
import SongFilter from "./components/SongFilter";

function App() {
  const songs = [
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Рок",
    },
    {
      id: 2,
      name: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Поп",
    },
    {
      id: 3,
      name: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      genre: "Поп",
    },
    {
      id: 4,
      name: "Rolling in the Deep",
      artist: "Adele",
      genre: "Блюз",
    },
    {
      id: 5,
      name: "Blinding Lights",
      artist: "The Weeknd",
      genre: "Поп",
    },
  ];

  const [songList, setSongList] = useState(songs);
  const addNewSongHendler = (newSong) => {
    setSongList((prevSongs) => [newSong, ...prevSongs]);
  };

  const [filterGenre, setFilterGenre] = useState("Поп");
  const filterChangeHandler = (selectedGenre) => {
    setFilterGenre(selectedGenre);
  };

  const delSongHendler = () => {
    setSongList((prevSongs) => {
      prevSongs.pop();
      return [...prevSongs];
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SongRequestForm
          addNewSong={addNewSongHendler}
          delSong={delSongHendler}
        />
        <SongFilter onChangeFilter={filterChangeHandler} />
        <SongList songs={songList} filterGenre={filterGenre} />
      </div>
    </div>
  );
}

export default App;
