import React from "react";
import SongItem from "./SongItem";

function SongList({ songs, filterGenre }) {
  const filtredSongs = songs.filter((item) => item.genre === filterGenre);

  return (
    <div className="song-list">
      {filtredSongs.map((song) => (
        <SongItem song={song} key={song.id} />
      ))}
    </div>
  );
}

export default SongList;
