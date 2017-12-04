var c={
        0:["Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi"],
        1:["Crossfit - Yoga","Crossfit - Yoga","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Yoga","Pilates - Crossfit","Crossfit"],
        2:["Yoga","Yoga","BODYPUMP","BODYPUMP","Pilates - Kick Boxing","Kick Boxing","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Pilates","BODYPUMP - Kick Boxing","Kick Boxing"],
        3:["Yoga - Crossfit","Crossfit","Sala pesi","Sala pesi","Sala pesi","Pilates","Pilates","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Pilates","Pilates - Crossfit","Cross fit"],
        4:["Yoga","Yoga","BODYPUMP","BODYPUMP","Pilates - Kick Boxing","Pilates - Kick Boxing","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Pilates - Kick Boxing","Pilates - Kick Boxing","BODYPUMP"],
        5:["Crossfit - Yoga","Crossfit - Yoga","Sala pesi","Sala pesi","Pilates","Pilates","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Pilates - Yoga","Pilates - Yoga - Crossfit","Crossfit"],
        6:["Yoga - BODYPUMP","Yoga - BODYPUMP","Sala pesi","Sala pesi","Sala pesi","Kick Boxing","Kick Boxing","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi","Sala pesi"]
};

function attivita(){
  var d = new Date();
  var x= d.getDay();
  var h= d.getHours();
  if(h>21||h<8){
    document.getElementById("palestraincorso").innerHTML="<h6>Engym chiusa</h6>";
    setInterval("attivita()",300000);
  }
  else{
    document.getElementById("palestraincorso").innerHTML="<h6>Ore "+h+":00: "+c[x][h-8]+"</h6>";
    setInterval("attivita()",300000);
  }
}
