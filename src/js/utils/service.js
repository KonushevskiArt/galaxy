const basedUrl = `https://galaxy-e1e9d-default-rtdb.europe-west1.firebasedatabase.app/pilots.json`

const getData = async () => {
  try {
    const res = await fetch(basedUrl);
    return await res.json();
  } catch (error) {
    console.log(error)
  }
}

const getListBestPilots = async () => {
  const data = await getData();
  const arrPilots = Object.values(await data)
    .sort((a, b) => b.score - a.score)
    .filter((el, i) => i < 49)
  return arrPilots;
}

const postScore = async (data) => {
  //url
  try {
    const response = await fetch(basedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      referrerPolicy: "unsafe-url",
      body: JSON.stringify(data)
    })
    
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}

export {getListBestPilots, postScore};