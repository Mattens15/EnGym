function storageInit(){
  if(typeof(localStorage.bodymassindex)=="undefined")
    localStorage.bodymassindex="[]";
}

function stampaStorage(){
  var u= JSON.parse(localStorage.bodymassindex);
  var l= u.length;
  var d= new Date();
  var today=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
  var s= new String("<h1>Storico indice di massa corporea:</h1>");
  for(var i=0;i<l;i++){
    s+="<br/><h1>Data:"+today+" </h1><h1>BMI:</h1>"+u[i].bmi+" <h1>"+u[i].stato+"</h1><br/>";
  }
  document.getElementById("storico").innerHTML=s;
}


function inserisciBMI(){
  var u = JSON.parse(localStorage.bodymassindex);
  var next = u.length;
  var temp = new String();
  var tempbmi=document.bmiform.peso.value/((document.bmiform.altezza.value/100) * (document.bmiform.altezza.value/100));
  if(tempbmi<16.5){ temp="GRAVE MAGREZZA";}
  else if (tempbmi>=16 && tempbmi<=18.49){ temp="SOTTOPESO";}
  else if (tempbmi>=18.5 && tempbmi<=24.99){ temp="NORMOPESO";}
  else if (tempbmi>=25 && tempbmi<=29.99){ temp="SOVRAPPESO";}
  else if (tempbmi>=30 && tempbmi<=34.99){ temp="OBESITÀ CLASSE I (lieve)";}
  else if (tempbmi>=35 && tempbmi<=39.99){ temp="OBESITÀ CLASSE II (media)";}
  else if (tempbmi>=40){ tempbmi="OBESITÀ CLASSE III (grave)";}

  var o = {
           bmi: tempbmi,
           stato: temp
         };
  u[next]=o;
  localStorage.bodymassindex=JSON.stringify(u);
}

function resetStorage(){
	if(typeof(localStorage.bodymassindex)!="undefined")
		localStorage.bodymassindex="[]";
}
