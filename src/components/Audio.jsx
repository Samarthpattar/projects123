import React, { forwardRef, useRef, useState } from 'react';

const AudioPlayer= forwardRef((props,ref)=> {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to toggle audio play/pause
  const toggleAudio = () => {
    if (isPlaying) {
        console.log("audio paused")
      audioRef.current.pause();
    } else {
        console.log("audio playing")
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button ref={ref}>Child button</button>
      <input type='text'  ref={ref}{...props}/>
    </div>
  );
})

export default AudioPlayer;