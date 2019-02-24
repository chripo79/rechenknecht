
const math = require('mathjs');

/*var ein = document.getElementById("wurzel_eingabe");
ein.addEventListener("input", rechne, false);
function rechne() {

    var a = parseFloat(document.getElementById("wurzel_eingabe").value.replace(',', '.'));
    var aus = math.sqrt(a);
    document.getElementById("wurzel_ausgabe").innerHTML = aus;

}*/
var rech = document.getElementById('rechne_eingabe');
rech.addEventListener("keydown", (evt) => {
    if (evt.key == "Enter") {
        rechne2();
    }
});



function rechne2() {

    var input = document.getElementById("rechne_eingabe").value;
    var rech_node = math.parse(input);
    var rech_code = rech_node.compile();
    document.getElementById("rechne_ausgabe").innerHTML = rech_code.eval();

}