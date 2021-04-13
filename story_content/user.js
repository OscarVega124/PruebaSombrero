function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5n1bKrZPSMd":
        Script1();
        break;
      case "67BeW3a9rmG":
        Script2();
        break;
      case "6qsQBs8uG6I":
        Script3();
        break;
      case "62muFmqe10B":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 

var d = new Date();

var o = {hour:'2-digit', minute:'2-digit', second:'2-digit'};
HORA = d.toLocaleDateString('en-US', o)

}

function Script2()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script3()
{
  var player = GetPlayer();
 

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyYIwFZ0kRP28wWDqyGhPg3q-gKs6fvqF-o15DLq0mSRggiQxKW/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
 "ENTRADA" : player.GetVar("HORA"),
 "MATRICULA" : player.GetVar("Matricula"),
 "NOMBRE" : player.GetVar("Nombre"),
 "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres"),
  "DIAPOSITIVAS VISUALISADAS" : player.GetVar("VIS"),
  "TOTAL DE DIAPOSITIVAS" : player.GetVar("TOT"),
  "CANTIDAD DE INTENTOS" : player.GetVar("intentos"),
  "INTENTOS <70" : player.GetVar("noaprobado"),
  "INTENTOS > 69.99" : player.GetVar("aprobado"),
  "SE IDENTIFICA CON" : player.GetVar("Sombrero")
}
}

function Script4()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

