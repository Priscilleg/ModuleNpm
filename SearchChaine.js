var searchElement = function (data2, callback) {
    for (var i = 0; i < data2.filtre.length; i++){
        for (var j = 0; j < data2.string.length; j++) {
            if (data2.string.substr(j, data2.filtre[i].length) == data2.filtre[i])
                nbreFoisTrouve++;
        }
    }
    if (nbreFoisTrouve > 0)
        return callback(null, recherche + " existe " + nbreFoisTrouve + " fois");
    return callback('Element ' + data2.filtre + ' non retrouve dans la chaine de caractere');
};

var Caract = 'aabaabbbabbbaa';
var recherche = ['ab', 'ba', 'abba'];
var data2 = { string: Caract, filtre: recherche };
var nbreFoisTrouve = 0;
searchElement(data2, function (err, result) {
    if (err)
        console.error("erreur : " + err);
    else
        console.log(result);
});