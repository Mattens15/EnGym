function storageInit(){
  if(typeof(localStorage.richieste)=="undefined")
    localStorage.richieste="[]";
}

function stampaStorage(){
  var u= JSON.parse(localStorage.richieste);
  var l= u.length;
  var s= new String("<h3>Storico delle Richieste:</h3>");
  for(var i=0;i<l;i++){
    s+="<h3>Nome:</h3>"+u[i].n+"<br/><h3>Cognome:</h3>"+u[i].c+"<br/><h3>Email:</h3>"+u[i].e+"<br/><h3>Messaggio:</h3>"+u[i].m+"<br/>";
  }
  document.getElementById("storico").innerHTML=s;
  console.log(s);
}

function inserisciRichiesta(){
  var u = JSON.parse(localStorage.richieste);
  var next = u.length;
  var o = {c: document.contattaci.cognome.value,
           n: document.contattaci.nome.value,
           e: document.contattaci.email.value,
           m: document.contattaci.messaggio.value};
  u[next]=o;
  localStorage.richieste=JSON.stringify(u);
  stampaStorage();
}
