const getListBestScors = async () => {
  const res = await fetch('./src/db.json');

  return await res.json();
}
const postScore = async (data) => {
  const response = await fetch('http://localhost:3000/src/db.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    referrerPolicy: "unsafe-url",
    body: JSON.stringify(data)
  })

  return await response.json();
}

export {getListBestScors, postScore};