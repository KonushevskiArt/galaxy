const showModal = (containerEl, modalSelector) => {
  const modal = containerEl.querySelector(modalSelector);

  modal.classList.add('active');
}

const Menu = (startGame, bg, menuAudio, data) => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('menu')
  wrapper.style.backgroundImage = `url(${bg.src})`;

  const audio = document.createElement('audio');
  audio.classList.add('audioMenu')
  audio.loop = true;
  audio.src = menuAudio.src;
  audio.autoplay = true;

  wrapper.innerHTML = `
    <h1 class="title">Galaxy</h1>
    <ul class="list">
      <li> <button class="trigger-modal">Start game</button> </li>

    </ul>
    <div class="description">
        <h3 class="description-title">Game description</h3>
        <ul class="description-list">
          <li><h4>Game over</h4>
            <p>Your task is to protect the main ship if the health of your ship or main ship drops to 0 end of the game</p></li>
          <li><h4>Ship control</h4>
            <p>The ship follows the mouse, fire by pressing the left mouse button.
              To restore the health of the ship and replenish ammunition, you need to be inside the main ship
            </p>
          </li>
          <li>
            <h4>Space trash</h4>
            <p>The health of the garbage depends on its size, the larger the size of the garbage and its speed, the greater the damage to the ship in a collision. Over time, the amount of garbage increases. Hitting debris slows its speed and reduces its health.</p>
          </li>
          
        </ul>
        <button class="start">Start game</button>
      </div>
  `;
  wrapper.appendChild(audio);
  wrapper.querySelector('.trigger-modal').onclick = () => showModal(wrapper, '.description');
  wrapper.querySelector('.start').onclick = startGame;
  data.audioMenu = wrapper.querySelector('.audioMenu');

  wrapper.onclick = () => {
    audio.play();
  }

  return wrapper;
} 
export {Menu};