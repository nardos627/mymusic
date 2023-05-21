// components/SongList.js
import React from 'react';
import { Button, Input,Flex, Box} from '@chakra-ui/react';

function SongList({ songs, onUpdate, onDelete }) {
  const handleUpdate = (song) => {
    onUpdate(song);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Box>
      {songs.map((song) => (
        <Flex key={song.id} alignItems="center" justifyContent="space-between" mb={2}>
          <Input value={song.title} isReadOnly />
          <Input value={song.artist} isReadOnly />
          <Input value={song.album} isReadOnly />
          <Button onClick={() => handleUpdate(song)}>Update</Button>
          <Button onClick={() => handleDelete(song.id)}>Delete</Button>
        </Flex>
      ))}
    </Box>
  );
}

export default SongList;
