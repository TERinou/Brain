const gkw = require('./functions/getKeyWords');
const ext = require('./functions/extract');

//console.log(gkw.getKeyWord("C'est quoi des chaises."));

module.exports = {
  getToken: gkw.getToken,
  getPosTag: gkw.getPosTag,
  getLemmas: gkw.getLemmas,
  getKeyWord: gkw.getKeyWord,
  getCarac: ext.getCarac(),
  getIsa: ext.getIsa(),
  getLieu: ext.getLieu(),
  getAgent: ext.getAgent(),
  getOwn: ext.getOwn()
};
