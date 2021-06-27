const Loading = (bg) => {
  const wrapper =  document.createElement('div');
  wrapper.classList.add('loading');
  wrapper.style.backgroundImage = `url(${bg.src})`;
  wrapper.innerHTML = `
    <div class="loadingio-spinner-eclipse-zkgdh328mvk"><div class="ldio-kp31otrzcd7">
    <div></div>
    </div></div>
    <h3 class="loading-title">loading</h3>
  `;
  return wrapper;
} 
export {Loading};