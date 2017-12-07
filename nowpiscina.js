var c={
        0:["Nuoto libero","Nuoto libero","Nuoto libero","Nuoto libero","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso"],
        1:["Nuoto libero","Nuoto libero","Nulla in corso","Nulla in corso","Nulla in corso","Nuoto Master","Nuoto Master","Nuoto Agonistico","Nuoto Agonistico - Scuola Nuoto","Nuoto Agonistico - Scuola Nuoto","Scuola Nuoto","Scuola Nuoto","Nuoto libero - Nuoto Master","Nuoto libero - Nuoto Master"],
        2:["Riabilitazione in acqua","Riabilitazione in acqua","Riabilitazione in acqua","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nuoto Agonistico","Nuoto Agonistico - Scuola Nuoto","Nuoto Agonistico - Scuola Nuoto","Scuola Nuoto","Scuola Nuoto","Acquagym","Acquagym"],
        3:["Nuoto libero","Nuoto libero","Nulla in corso","Nulla in corso","Nulla in corso","Nuoto Master","Nuoto Master","Nuoto Agonistico","Nuoto Agonistico - Scuola Nuoto","Nuoto Agonistico - Scuola Nuoto","Scuola Nuoto","Scuola Nuoto","Nuoto libero - Nuoto Master","Nuoto libero - Nuoto Master"],
        4:["Riabilitazione in acqua","Riabilitazione in acqua","Riabilitazione in acqua","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nuoto Agonistico","Nuoto Agonistico - Scuola Nuoto","Nuoto Agonistico - Scuola Nuoto","Scuola Nuoto","Scuola Nuoto","Acquagym","Acquagym"],
        5:["Nuoto libero","Nuoto libero","Nulla in corso","Nulla in corso","Nulla in corso","Nuoto Master","Nuoto Master","Nuoto Agonistico","Nuoto Agonistico - Scuola Nuoto","Nuoto Agonistico - Scuola Nuoto","Scuola Nuoto","Scuola Nuoto","Nuoto libero - Nuoto Master","Nuoto libero - Nuoto Master"],
        6:["Nuoto Agonistico - Riabilitazione in acqua","Nuoto Agonistico - Riabilitazione in acqua","Nuoto Agonistico - Riabilitazione in acqua","Nuoto Agonistico","Nulla in corso","Nulla in corso","Nulla in corso","Scuola Nuoto","Scuola Nuoto","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso","Nulla in corso"]
};

function attivitaPool(){
  var d = new Date();
  var x= d.getDay();
  var h= d.getHours();
  if(h>21||h<8){
    document.getElementById("piscinaincorso").innerHTML="<h6>Engym chiusa</h6>";
    setInterval("attivitaPool()",300000);
  }
  else{
    document.getElementById("piscinaincorso").innerHTML="<h6>Ore "+h+":00: "+c[x][h-8]+"</h6>";
    setInterval("attivitaPool()",300000);
  }
}
