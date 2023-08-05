import React from "react";
import SongItem from "./SongItem";

function SongList({ songs }) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongItem song={song} key={song.id} />
      ))}

      {/* <SongItem song={songs[0]} />
      <SongItem song={songs[1]} />
      <SongItem song={songs[2]} />
      <SongItem song={songs[3]} />
      <SongItem song={songs[4]} /> */}
    </div>
  );
}

export default SongList;
