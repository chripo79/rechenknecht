const math = require('mathjs');


/*  let ein = document.getElementById("wurzel_eingabe");
ein.addEventListener("input", rechne, false);
function rechne() {

    let a = parseFloat(document.getElementById("wurzel_eingabe").value.replace(',', '.'));
    let aus = math.sqrt(a);
    document.getElementById("wurzel_ausgabe").innerHTML = aus;

} */
let rechnerZaehler = 0;




/*  let rech = document.getElementById('rechne_eingabe');
rech.addEventListener("keydown", (evt) => {
    if (evt.key == "Enter") {

        rechne2();
    }
});*/
let neu = document.getElementById('add_rechne');
neu.addEventListener("click", function () {

    

    let tempNodes = document.querySelector('#tmp_add');
    let nodesToAdd = tempNodes.content.cloneNode(true);
    let nodesAddedTo = document.getElementById('berechne');
    let tempPart;

    rechnerZaehler += 1;
    
    nodesAddedTo.appendChild(nodesToAdd);
    addcounter = document.createElement("div");
    addcounter.innerHTML = rechnerZaehler;

    tempPart=document.getElementById('tmp_rechenfeld');
    tempPart.id=('rechenfeld_'+rechnerZaehler);

    tempPart=document.getElementById('tmp_rechne_eingabe');
    tempPart.id=('rechne_eingabe_'+rechnerZaehler);

    tempPart=document.getElementById('tmp_rechne_ausgabe');
    tempPart.id=('rechne_ausgabe_'+rechnerZaehler);

    tempPart=document.getElementById('tmp_delrechnung');
    tempPart.id=('delrechnung_'+rechnerZaehler);


    
    //ausgabe Anzahl "Rechner"
    nodesAddedTo.prepend(addcounter);
});


let ergebnis_Berechne = document.getElementById('berechne')
ergebnis_Berechne.addEventListener("keydown",(evt)=>{

    if (evt.key == "Enter"){
      for (let index = 0; index <= rechnerZaehler; index++) {
         rechne(index);
          
      }

        
    }
});


function rechne(nummer) {

    let input = document.getElementById("rechne_eingabe_"+nummer).value;
   try{
    let rech_node = math.parse(input);
    let rech_code = rech_node.compile();
    document.getElementById("rechne_ausgabe_"+nummer).innerHTML = rech_code.eval();
   
    }
   catch(err){
       document.getElementById("rechne_ausgabe_"+nummer).innerHTML="Bitte Einagbe Prüfen"
   }
}