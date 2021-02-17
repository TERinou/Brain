const gkw = require('./functions/getKeyWords');

//console.log(gkw.getKeyWord("C'est quoi des chaises."));

module.exports = {
  getToken: gkw.getToken,
  getPosTag: gkw.getPosTag,
  getLemmas: gkw.getLemmas,
  getKeyWord: gkw.getKeyWord
};
