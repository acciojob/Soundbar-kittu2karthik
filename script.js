const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const audioMap = {};
sounds.forEach(sound => {
  audioMap[sound] = new Audio(`./sounds/${sound}.mp3`);
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = audioMap[sound];
    audio.pause();
    audio.currentTime = 0;
  });
}

sounds.forEach(sound => {
  const button = document.getElementById(sound);
  button.addEventListener('click', () => {
    stopSounds(); 
    audioMap[sound].play();
  });
});

// Stop button event listener
document.getElementById('stop').addEventListener('click', stopSounds);
