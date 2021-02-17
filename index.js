const gkw = require('./functions/getKeyWords');

console.log(gkw.getKeyWord("C'est quoi des chaises."));

module.exports = gkw.getToken;
module.exports = gkw.getPosTag;
module.exports = gkw.getLemmas;
module.exports = gkw.getKeyWord;