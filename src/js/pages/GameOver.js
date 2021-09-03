const GameOver = (data, restartFunc, bg, audioGameOver) => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('gameover');
  wrapper.style.backgroundImage = `url(${bg.src})`;

  const audio = document.createElement('audio');
  audio.loop = true;
  audio.src = audioGameOver.src;
  audio.autoplay = true;

  wrapper.innerHTML = `
    <h3 class="title">Game over</h3>
    <span class="score">Your scrore: ${data.score}</span>
    <button class="restart">restart</button>
  `
  wrapper.querySelector('.restart').onclick = restartFunc;
  
  wrapper.querySelector('.restart').tabIndex = 0;
  ////////
  const onclick = (e) => {
    if (e.keyCode === 13) {
      //////////
      wrapper.querySelector('.restart').focus();
      window.removeEventListener('click', onclick)
    }  
  } 
  window.addEventListener('keydown', onclick);

  wrapper.appendChild(audio);
  return wrapper;
} 
export {GameOver};