const name = {
  firstName: 'George'
}

function setNickname(name) {
  const obj = name;
  obj.nickname = 'Henry';
  return obj;
}

// setNickname(name)
export { setNickname }