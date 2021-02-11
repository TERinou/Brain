const NlpjsTFr = require('nlp-js-tools-french');

const config = {
    strictness: false,
    minimumLength: 3,
    debug: true
};

module.exports = {
    getToken: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const tokenizedWords = nlpToolsFr.tokenized;

    },
    getPosTag: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const posTaggedWords = nlpToolsFr.posTagger();
    },
    getLemmas: function (phrase){
        if (phrase == null)
            phrase = "";

        const nlpToolsFr = new NlpjsTFr(phrase, config);

        const lemmatizedWords = nlpToolsFr.lemmatizer();
    }
}