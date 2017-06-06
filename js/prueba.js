/*
var boton= document.getElementById ("boton");
var texto= document.getElementById("texto");
var aux= document.getElementById("aux");

var img= document.createElement("img");
img.src="images/img1.png";

var p= document.createElement("p");
p.appendChild(img);
p.classList.toggle("hide");

var ver= function(){
    texto.classList.toggle("hide");
    p.classList.toggle("hide");
   
    if (texto.className.includes("hide")){
        this.textContent="Mostrar";
    }else{
        this.textContent="Esconder";
    };
    
    aux.insertBefore(p,texto);
};

boton.addEventListener("click", ver);

var mostrarParrafo= function(){
    texto.getElementById("texto");
};

var mostrarId= function(){
    alert("id del parrafo: " +texto.id);
};
mostrarId();
function printDOM(node, prefix){
    console.log(prefix + node.nodeName);
    for(let i =0; i<node.childNodes.length; i++){
        printDOM(node.childNodes[i], prefix + '');

    }
}
printDOM(document, '');


var conClass= document.getElementsByClassName("texto");
for(let i=0; i<conClass.length; i++){
  conClass[i].classList.add("on2");
};*/


var buscar="Suspendisse";
var encontrado= false;
var sentences = document.querySelector('#sentences');
var boton = document.querySelector('#boton');


boton.addEventListener('click', function(event){
boton.textContent="Off";
  var text = sentences.textContent;
    var regex = new RegExp('('+buscar+')', 'ig');
  if (encontrado){
    text = text.replace(regex, '<span class="">$1</span>');
    boton.textContent="ON";
    encontrado=false;
    }else{text = text.replace(regex, '<span class="highlight">$1</span>');
    encontrado=true;}
    sentences.innerHTML = text;
}, false);



