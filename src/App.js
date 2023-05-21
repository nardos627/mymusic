import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, addSong, updateSong, deleteSong } from './store/songsSlice';
import SongList from './components/SongList';
import SongForm from './components/SongForm';


function App() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleAddSong = (song) => {
    dispatch(addSong(song));
  };

  const handleUpdateSong = (song) => {
    dispatch(updateSong(song));
  };

  const handleDeleteSong = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h1>Songs</h1>
      <SongList songs={songs} onUpdate={handleUpdateSong} onDelete={handleDeleteSong} />
      <SongForm onSubmit={handleAddSong} />
    </div>
  );
}

export default App;