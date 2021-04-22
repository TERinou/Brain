const gkw = require('./getKeyWords');

function check(phrase) {
    if (phrase == null)
        phrase = "";
    return phrase;
}

function getRelationObject(relationStr, X_Y, relationType) {
    return {
        word : gkw.analyse(X_Y.split(relationStr)[0]),
        type : relationType,
        relatedTo : gkw.analyse(X_Y.split(relationStr)[1])
    };
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
 * Est-ce que XXX peut YYY ? (XXX est un objet, YYY est une action) #r_agent-1
 *
 * Est-ce que XXX possède YYY ? (XXX est un objet, YYY est un objet) #r_own
 */
module.exports = {
    getRelation: function (phrase) {
        phrase = check(phrase);
        const regex = new RegExp("Est-ce que ");
        const check_question = regex.exec(phrase);
        if (check_question == null) {
            console.error(new Error("Phrase pas de la forme : \"Est-ce que ....\""));
        } else {
            const X_Y = phrase.replace('Est-ce que ', '');

            const lieu = " se trouve dans ";
            const agent = " peut ";
            const own = " possède ";
            const isA = " est lié à ";
            const carac = " est ";
            const color = " a pour couleur ";
            const but = " a pour but ";
            const conseq = " est une conséquence de ";
            const make = " peut fabriquer ";

            if (X_Y.split(lieu)[1] !== undefined) {
                return getRelationObject(lieu, X_Y, 'r_lieu');
            } else if (X_Y.split(agent)[1] !== undefined) {
                return getRelationObject(agent, X_Y, 'r_agent');
            } else if (X_Y.split(own)[1] !== undefined) {
                return getRelationObject(own, X_Y, 'r_own');
            } else if (X_Y.split(isA)[1] !== undefined) {
                return getRelationObject(isA, X_Y, 'r_isa');
            } else if (X_Y.split(carac)[1] !== undefined) {
                return getRelationObject(carac, X_Y, 'r_carac');
            } else if (X_Y.split(color)[1] !== undefined) {
                return getRelationObject(color, X_Y, 'r_color');
            } else if (X_Y.split(but)[1] !== undefined) {
                return getRelationObject(but, X_Y, 'r_but');
            } else if (X_Y.split(conseq)[1] !== undefined) {
                return getRelationObject(conseq, X_Y, 'r_conseq');
            } else if (X_Y.split(make)[1] !== undefined) {
                return getRelationObject(make, X_Y, 'r_make');
            } else {
                console.error(new Error("\"XXX typeRelation YYY\" undefined."));
            }
        }
    },

    listRelation: function () {
        const relations = [];
        relations.push("r_isa : 'r_isa'");
        relations.push("r_carac : 'r_carac'");
        relations.push("r_lieu : 'r_lieu'");
        relations.push("r_agent : 'r_agent'");
        relations.push("r_own : 'r_own'");
        relations.push("r_color : 'r_color'");
        relations.push("r_but : 'r_but'");
        relations.push("r_conseq : 'r_conseq'");
        relations.push("r_make : 'r_make'");
        return relations;
    }
}