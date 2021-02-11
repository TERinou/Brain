const NlpjsTFr = require('nlp-js-tools-french');

// tagTypes: ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver", "pro"]
// UNK si inconnu
const config = {
    strictness: false,
    minimumLength: 3,
    debug: true
};

/**
 * Différentes fonctions d'extraction à partir d'une phrase
 * @type {{getLemmas: (function(*=): *), getKeyWords: (function(*=): []), getToken: (function(*=): *), getPosTag: (function(*=): *)}}
 */
module.exports = {
    /**
     * Tokenize les mots de la phrase
     * @param phrase
     * @returns Tableau des mots.
     */
    getToken: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const tokenizedWords = nlpToolsFr.tokenized;

        return tokenizedWords;
    },
    /**
     * Definit le type des mots (ex: nourrir => verbe)
     * @param phrase
     * @returns Tableau de dictionnaire contenant id,word,pos de chaque mot
     */
    getPosTag: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const posTaggedWords = nlpToolsFr.posTagger();

        return posTaggedWords;
    },
    /**
     * Retourne le mot au dessus (ex: semble => sembler)
     * @param phrase
     * @returns Tableau de dictionnaire contenant id,word,lemma de chaque mot
     */
    getLemmas: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const lemmatizedWords = nlpToolsFr.lemmatizer();

        return lemmatizedWords;
    },
    /**
     * Extrait les mots clefs de la phrase
     * @param phrase
     * @returns Liste des mots clefs
     */
    getKeyWords: function (phrase){
        let keyWords = [];

        let posTaggedWords = this.getPosTag(phrase);

        posTaggedWords.forEach(function (item, index, array){
            keyWords.push(item.word);
        });

        //console.log("[+] " + keyWords);
        return keyWords;
    }
}