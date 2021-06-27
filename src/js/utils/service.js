const getListBestScors = async () => {
  //url
  const res = await fetch('');

  return await res.json();
}

const postScore = async (data) => {
  //url
  const response = await fetch('', {
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