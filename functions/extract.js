const NlpjsTFr = require('nlp-js-tools-french');

function check(phrase){
    if (phrase == null)
        phrase = "";
    return phrase;
}

/**
 * Les fonctions suivantes transmet les données de la forme (objet, titre)
 * @type {{getLieu: module.exports.getLieu, getOwn: module.exports.getOwn, getIsa: module.exports.getIsa, getAgent: module.exports.getAgent, getCarac: module.exports.getCarac}}
 */
module.exports = {
    /**
     * Est-ce que XXX est YYY ? (XXX est un objet, YYY est une caractéristique) #r_carac
     */
    getCarac: function (phrase){
        phrase = check(phrase);

    },
    /**
     * Est-ce que XXX est lié à YYY ? (XXX est un objet, YYY est un objet) #r_isa
     */
    getIsa: function (phrase){
        phrase = check(phrase);

    },
    /**
     * Est-ce que XXX se trouve dans YYY ? (XXX est un objet, YYY est un lieu) #r_lieu
     */
    getLieu: function (phrase){
        phrase = check(phrase);

    },
    /**
     * Est-ce que XXX peut YYY ? (XXX est un objet, YYY est une action) #r_agent-1
     */
    getAgent: function (phrase){
        phrase = check(phrase);

    },
    /**
     * Est-ce que XXX possède YYY ? (XXX est un objet, YYY est un objet) #r_own
     */
    getOwn: function (phrase){
        phrase = check(phrase);

    }
}