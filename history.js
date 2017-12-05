function storageInit(){
  if(typeof(localStorage.richieste)=="undefined")
    localStorage.richieste="[]";
}

function stampaStorage(){
  var u= JSON.parse(localStorage.richieste);
  var l= u.length;
  var s= new String("<h1>Storico delle Richieste:</h1>");
  for(var i=0;i<l;i++){
    s+="<h1>Nome:</h1>"+u[i].n+"<br/><h1>Cognome:</h1>"+u[i].c+"<br/><h1>Email:</h1>"+u[i].e+"<br/><h1>Messaggio:</h1>"+u[i].m+"<br/>";
  }
  document.getElementById("storico").innerHTML=s;
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
}
