function techList(techs, name) {
  let array = [];

  if (techs.length === 0) {
    return 'Vazio!';
  }

  for (let value of techs) {
    array.push({
      tech: value,
      name,
    });
  }

  return array.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }

    return -1;
  });
}

module.exports = techList;