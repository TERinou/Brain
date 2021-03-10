const NlpjsTFr = require('nlp-js-tools-french');
const gkw = require('./getKeyWords');

function check(phrase){
    if (phrase == null)
        phrase = "";
    return phrase;
}

/**
 * Transmet les données de la forme (objet, typeRelation, type)
 *
 * Est-ce que XXX est YYY ? (XXX est un objet, YYY est une caractéristique) #r_carac
 *
 * Est-ce que XXX est lié à YYY ? (XXX est un objet, YYY est un objet) #r_isa
 *
 * Est-ce que XXX se trouve dans YYY ? (XXX est un objet, YYY est un lieu) #r_lieu
 *
 * Est-ce que XXX peut YYY ? (XXX est un objet, YYY est une action) #r_agent
 *
 * Est-ce que XXX possède YYY ? (XXX est un objet, YYY est un objet) #r_own
 */
module.exports = {
    getRelation: function (phrase){
        phrase = check(phrase);
        let regex = new RegExp("Est-ce que ");
        let check_question = regex.exec(phrase);
        if(check_question == null) {
            console.error(new Error("Phrase pas de la forme : \"Est-ce que ....\""));
        } else {
            let X_Y = phrase.replace('Est-ce que ', '');

            let lieu = " se trouve dans ";
            let agent = " peut ";
            let own = " possède ";
            let isA = " est lié à ";
            let carac = " est ";

            if(X_Y.split(lieu)[1] != undefined){
                let o = gkw.analyse(X_Y.split(lieu)[0]);
                let r = gkw.analyse(X_Y.split(lieu)[1]);
                var res = {
                    object : o,
                    typeRelation : "r_lieu",
                    relation : r
                };
                return res;
            }else if(X_Y.split(agent)[1] != undefined){
                let o = gkw.analyse(X_Y.split(agent)[0]);
                let r = gkw.analyse(X_Y.split(agent)[1]);
                var res = {
                    object : o,
                    typeRelation : "r_agent",
                    relation : r
                };
                return res;
            }else if(X_Y.split(own)[1] != undefined){
                let o = gkw.analyse(X_Y.split(own)[0]);
                let r = gkw.analyse(X_Y.split(own)[1]);
                var res = {
                    object : o,
                    typeRelation : "r_own",
                    relation : r
                };
                return res;
            }else if(X_Y.split(isA)[1] != undefined){
                let o = gkw.analyse(X_Y.split(isA)[0]);
                let r = gkw.analyse(X_Y.split(isA)[1]);
                var res = {
                    object : o,
                    typeRelation : "r_isa",
                    relation : r
                };
                return res;
            }else if(X_Y.split(carac)[1] != undefined){
                let o = gkw.analyse(X_Y.split(carac)[0]);
                let r = gkw.analyse(X_Y.split(carac)[1]);
                var res = {
                    object : o,
                    typeRelation : "r_carac",
                    relation : r
                };
                return res;
            }else{
                console.error(new Error("\"XXX typeRelation YYY\" undefined."));
            }
        }
    }
}