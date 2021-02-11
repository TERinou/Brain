const gkw = require('./functions/getKeyWords');

//console.log(gkw.getKeyWord("C'est quoi une chaise."));

module.exports = {
  getToken: gkw.getToken,
  getPosTag: gkw.getPosTag,
  getLemmas: gkw.getLemmas,
  getKeyWork: gkw.getKeyWord
};
