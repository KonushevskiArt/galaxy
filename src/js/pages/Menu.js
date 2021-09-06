let isShowModal = false;
let focusedLink = null; 

const showModal = (containerEl, modalSelector) => {
  const modal = containerEl.querySelector(modalSelector);
  const close = modal.querySelector('.close');
  isShowModal = true;


  if (modalSelector === '.start-game') {
    modal.querySelector('.name').focus();
  }

  if (modalSelector === '.description' || modalSelector === '.listPlayers') {
    modal.querySelector('.modal-content').tabIndex = 0;
    modal.querySelector('.modal-content').focus();
    modal.querySelector('.modal-content').click();
  }
 
  
  
  const checkKey = (e) => {
    if (e.keyCode === 27) {
      modal.classList.remove('active');
      isShowModal = false;
      window.removeEventListener('keydown', checkKey)
    } else if (modalSelector === '.start-game' && e.keyCode === 13) {
      const input = modal.querySelector('.name');
      if (input.value.length > 3) {
        modal.querySelector('.start').focus();
        isShowModal = false;
      }
    } 
  }

  window.addEventListener('keydown', checkKey); 

  close.onclick = () => {
    modal.classList.remove('active');
    isShowModal = false;
  };

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
  let listPlayrs;
  

  const changeLinks = (e) => {
    if (e.keyCode === 38 && !isShowModal) {
      try {
        const prevLink = focusedLink.parentElement.previousElementSibling.firstElementChild;
        if (prevLink) {
          prevLink.focus();
          focusedLink = prevLink;
        }
      } catch (error) {}
    }
    if (e.keyCode === 40 && !isShowModal) {
      try {
          const nextLink = focusedLink.parentElement.nextElementSibling.firstElementChild;
        if (nextLink) {
          nextLink.focus();
          focusedLink = nextLink;
        }
      } catch (error) {}
    } 
  }

  window.onkeyup = changeLinks; 
  
  try {
    listPlayrs = data.ListBestPilots.reduce((resStr, el, index) => {
      const {name, score} = el;
  
      return (`
        ${resStr}
        <li>
          <p>${index+1} ${name}: ${score}</p>
        </li>
      `)
    }, ``);

  } catch (error) {
    console.log(error)
  }

  //create exit game 

  wrapper.innerHTML = `
    <h1 class="title">Galaxy</h1>
    <ul class="list">
      <li> <button class="trigger-start" autofocus>Start game</button> </li>
      <li> <button class="trigger-desription">Game description</button> </li>
      <li> <button class="trigger-bestPlayers">List of the best pilots</button> </li>
    </ul>

    <div class="modal description">
      <button class="close">&times</button>
      <div class="overlay"></div>
      <div class="modal-content">
        <h3 class="modal-title">Game description</h3>
        <ul class="modal-list">
          <li><h4>Game over</h4>
            <p>Your task is to protect the main ship if the health of your ship or main ship drops to 0 end of the game</p></li>
          <li><h4>Ship control</h4>
            <p>the ship moves up by pressing the up arrow, moves down by pressing the down arrow, to the left by pressing the left arrow, to the right by pressing the right arrow, fire by pressing space bar.
              To restore the health of the ship and replenish ammunition, you need to be inside the main ship
            </p>
          </li>
          <li>
            <h4>Space trash</h4>
            <p>The health of the garbage depends on its size, the larger the size of the garbage and its speed, the greater the damage to the ship in a collision. Over time, the amount of garbage increases. Hitting debris slows its speed and reduces its health.</p>
          </li>
        </ul>
      </div> 
    </div>

    <div class="modal start-game">
      <button class="close">&times</button>
      <div class="overlay"></div>
      <div class="modal-content">
        <label class="label" for="name">enter pilot name</label>
        <input type="text" name="name" class="name"> 
        <span class="error-message">name is too short</span>
        <button class="start">Start game</button>
      </div>
    </div>

    <div class="modal listPlayers">
      <button class="close">&times</button>
      <div class="overlay"></div>
      <div class="modal-content">
        <h3 class="modal-title">List of the best pilots</h3>
        <ul class="modal-list">
          ${listPlayrs}
        </ul>
      </div>
    </div>
  `;
  focusedLink = wrapper.querySelector('.trigger-start');

  wrapper.appendChild(audio);

  const inputName = wrapper.querySelector('.name');
  const spanError = wrapper.querySelector('.error-message');

  inputName.oninput = (e) => {
    let value = e.target.value;
    inputName.classList.remove('error');
    spanError.classList.remove('active');
    value = value.replace(/[^a-zA-Z0-9а-яёА-ЯЁ]+/g, '');
  }
  wrapper.querySelector('.trigger-bestPlayers').onclick = () => showModal(wrapper, '.listPlayers');
  wrapper.querySelector('.trigger-desription').onclick = () => showModal(wrapper, '.description');
  wrapper.querySelector('.trigger-start').onclick = () => showModal(wrapper, '.start-game');

  wrapper.querySelector('.start').onclick = () => {
    if (inputName.value.length > 2) {
      startGame(inputName.value);
    }
    inputName.classList.add('error');
    spanError.classList.add('active');
  };

  wrapper.onclick = () => {
    audio.play();
  }

  return wrapper;
} 
export {Menu};