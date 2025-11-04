const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Create and append audio elements to the body
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// Add event listeners for play
sounds.forEach(sound => {
  const btn = document.getElementById(sound);
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });
});

// Stop button
document.getElementById('stop').addEventListener('click', stopSounds);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
