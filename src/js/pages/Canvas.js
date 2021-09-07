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

    <div class="escModal">
      <p>Do you realy want to escape?</p>
      <div class="escModal-buttons">
        <button class="esc">yes</button>
        <button class="cont">no</button>
      </div>
    </div>
  `;

  const escEl = wrapper.querySelector('.escModal');
  const btnEsc = escEl.querySelector('.esc');
  const btnCont = escEl.querySelector('.cont');

  const continueGame = () => {
    escEl.style.display = 'none';
    requestAnimationFrame(game.gameLoop);
    game.gameTimeId = setInterval(() => {
      game.data.gameTime += 1;
      game.data.currnetCountAsteros += 0.02;
      }, 1000)
  }

  const escapeGame = () => {
    game.showMenu();
    window.removeEventListener('keyup', showModal);
  }

  const showModal = (e) => {
    if (e.code === 'Escape') {
      cancelAnimationFrame(game.reqAnim);
      clearInterval(game.gameTimeId);

      escEl.style.display = 'block';

      btnEsc.onclick = () => escapeGame();
      btnCont.onclick = () => continueGame();
    }

    if (e.code === 'ArrowRight') {
      btnCont.focus();
    }

    if (e.code === 'ArrowLeft') {
      btnEsc.focus();
    }
  } 

  window.addEventListener('keyup', showModal);

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