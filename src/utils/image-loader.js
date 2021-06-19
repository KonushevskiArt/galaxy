const imageLoader = async (obj) => {
  const result = {};
  const promises = [];

  for (let name in obj) {
    const promise = new Promise((resolve) => {
      const img = document.createElement('img');
      img.src = obj[name];
      result[name] = img;
      resolve();
    })
    promises.push(promise);
  }

  await Promise.all(promises);
  
  return result;
}

export {imageLoader};