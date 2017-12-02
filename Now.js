var c={ 1:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        2:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        3:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        4:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        5:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        6:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        7:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"]
      };

function attivita(){
  var d = new Date();
  var x= d.getDay();
  var h=d.getHours();
  var m=d.getMinutes();
  if(h>=22||d<=8){
    document.getElementById('msg').innerHTML="Palestra chiusa";
  }
  else{
    document.getElementById('msg').innerHTML=c[x][h-8];
  }
}

setInterval("attivita()",5000);
