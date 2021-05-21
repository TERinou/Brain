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
     * Donne le mot clef de la phrase.
     * @param phrase
     * @returns mot clef
     */
    getKeyWord: function (phrase) {
        let keyWords = [];

        let posTaggedWords = this.getPosTag(phrase);

        posTaggedWords.forEach(function (item, index, array) {
            if (item.pos.includes("NOM")) {
                keyWords.push(item.word);
            }
        });

        let tag = this.getLemmas(keyWords.pop());
        let res = "";
        tag.forEach(function (item, index, array) {
            res = item.lemma;
        })

        return res;
    },
    analyse: function (phrase){
        let keyWords = [];

        let posTaggedWords = this.getPosTag(phrase);

        let regex = new RegExp("ART:[a-zA-Z]*");
        let regex2 = new RegExp("PRO:[a-zA-Z]*");

        posTaggedWords.forEach(function (item, index, array){
            let tmp = 1;
            item.pos.forEach(function (type, index, array){
                let check_type = regex.exec(type);
                let check_type2 = regex2.exec(type);
                if(check_type != null){
                    tmp = 0;
                }
                if(check_type2 != null){
                    tmp = 0;
                }
            });
            if(tmp == 1){
                keyWords.push(item.word);
            }
        });

        let mot = "undefined";
        if(keyWords.length > 0){
            // A modif selon les problèmes lors des tests de Thominou
            mot = keyWords.pop();
        }

        return mot;
    }
}
