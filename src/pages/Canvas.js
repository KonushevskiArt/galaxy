const Canvas = () => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('game-wrapper')
  wrapper.innerHTML = `
    <canvas class="game" width="600" height="600">Элемент не поддерживается</canvas>
  `
  return wrapper;
} 
export {Canvas};