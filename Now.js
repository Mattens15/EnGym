var c={
        0:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        1:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        2:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        3:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        4:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        5:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"],
        6:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g"]
};

function attivita(){
  var d = new Date();
  var x= d.getDay();
  var h= d.getHours();
  if(h>22||h<8){
    document.getElementById("palestraincorso").innerHTML="<h6>Palestra chiusa</h6>";
    setInterval("attivita()",300000);
  }
  else{
    document.getElementById("palestraincorso").innerHTML="<h6>"+c[x][h-8]+"</h6>";
    setInterval("attivita()",300000);
  }
}
