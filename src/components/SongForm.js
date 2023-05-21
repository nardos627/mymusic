// components/SongForm.js
import React, { useState } from 'react';
import { Button, Input,Box,Flex } from '@chakra-ui/react';

function SongForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, artist, album });
    setTitle('');
    setArtist('');
    setAlbum('');
  };

  return (
    <Box mt={4}>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center" justifyContent="space-between" mb={2}>
          <Input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
          <Input placeholder="Artist" value={artist} onChange={(event) => setArtist(event.target.value)} />
          <Input placeholder="Album" value={album} onChange={(event) => setAlbum(event.target.value)} />
          <Button type="submit">Add Song</Button>
        </Flex>
      </form>
    </Box>
  );
}

export default SongForm;
