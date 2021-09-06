const Canvas = (audios, data, game) => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('game-wrapper');

  const audio = document.createElement('audio');
  audio.loop = true;
  audio.src = audios.game.src;
  audio.autoplay = true;

  const audioHit = document.createElement('audio');
  audioHit.src = audios.hit.src;
  audioHit.classList.add('audioHit');

  const audioExplode = document.createElement('audio');
  audioExplode.src = audios.explode.src;
  audioExplode.classList.add('audioExplode');

  const audioBlaster = document.createElement('audio');
  audioBlaster.src = audios.blaster.src;
  audioBlaster.classList.add('audioBlaster');
  audioBlaster.volume = 0.2;
  
  const audioShipSound = document.createElement('audio');
  audioShipSound.src = audios.shipSound.src;
  audioShipSound.classList.add('audioShipSound');
  audioShipSound.loop = true;
  
  wrapper.innerHTML = `
    <canvas class="game" width="600" height="600">Элемент не поддерживается</canvas>
  `;
  window.onkeyup = (e) => {
    console.log('dsfsdf')
    console.log(e.keyCode)
  }
  //modal ask about live (yes or not ) and stop game loop and return to main menu or continuous game

  wrapper.appendChild(audio);
  wrapper.appendChild(audioHit);
  wrapper.appendChild(audioExplode);
  wrapper.appendChild(audioBlaster);
  wrapper.appendChild(audioShipSound);

  data.audioHit = wrapper.querySelector('.audioHit');
  data.audioExplode = wrapper.querySelector('.audioExplode');
  data.audioBlaster = wrapper.querySelector('.audioBlaster');
  data.audioShipSound = wrapper.querySelector('.audioShipSound');
  
  
  return wrapper;
} 
export {Canvas};