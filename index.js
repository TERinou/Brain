const gkw = require('./functions/getKeyWords');
const ext = require('./functions/extract');

//console.log(gkw.getKeyWord("C'est quoi des chaises."));
// console.log(gkw.getKeyWord("C'est quoi des chaises."));
// console.log(ext.getRelation("Est-ce que un chat est gros ?"));
// console.log(ext.getRelation("Est-ce que un chat est lié à felin ?"));
// console.log(ext.getRelation("Est-ce que un chat se trouve dans un panier ?"));
// console.log(ext.getRelation("Est-ce que un chat peut manger ?"));
// console.log(ext.getRelation("Est-ce que un chat possède une pantoufle ?"));

module.exports = {
    getToken: gkw.getToken,
    getPosTag: gkw.getPosTag,
    getLemmas: gkw.getLemmas,
    getKeyWord: gkw.getKeyWord,
    getRelation: ext.getRelation
};
