const GameOver = (data, restart, bg) => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('gameover');
  wrapper.style.backgroundImage = `url(${bg.src})`;

  wrapper.innerHTML = `
  <h3 class="title">Game over</h3>
  <span class="score">Your scrore: ${data.score}</span>
  <button class="restart">restart</button>
  `
  wrapper.querySelector('.restart').onclick = restart;
  return wrapper;
} 
export {GameOver};