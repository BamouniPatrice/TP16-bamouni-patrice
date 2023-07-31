alert("le ficher fonctionne !");
//ceci est un commentaire

/*ceci 
est
un 
commmentare*/

console.log("hello");

let maVariableSuperCool = " KamelCase";

console.log(maVariableSuperCool);

var unTexte = "Voici un texte";

console.log(unTexte);

unTexte = "Nouveau texte..."

console.log(unTexte);

const prenom = " Justine"

console.log(prenom)

prenom

// const est une variable qui ne bouge pas
                                      
let unChiffre = 24;

unChiffre = 12;

console.log(unChiffre);

let chiffre = 47;
   
let nouvelleChaine = `Le chiffre attendu est :  ${chiffre} degre`;

console.log(nouvelleChaine); 

let string = "je suis une chaine";
let number = 24;
let boolean = true;
let array = ["je", "suis", 24, false];

let objet = {
    prenom: "audrey",
    age: 34,
    ville: "bordeaux",
};

let arbre = null

console.log(arbre);

let total = 2 ;
let x = 4
x++
total = x;

console.log(total);

let a = 2;
let b = 5;

if (a >= b) {
 console.log("x est inferieur à y");   
}else {
 console.log("a est superieur à b");   
}
let c = 6;
let d = 5;

if (c === d) {
   console.log("true !"); 
} else if (c == d) {
  console.log("x et y egaux en valeur");  
} else {
  console.log(c + " et " + d + " ne sont pas du tout egaux"); 
  console.log(`${c} et ${d} ne sont pas du tout egaux`);  
} 
let e = 5;
let f = 5;

e === f ? console.log("true !") : console.log("false");;

function faireQuelqueChose() {
  console.log("je fais un truc !");
  console.log("trop cool");  
}
const faireUneTache = (tache) => {
console.log("je fais : " + tache);
}
faireUneTache("les courses")
faireUneTache("le menage")

function calc(x, y) {
  return x + y;
}

(function maFonction() {
 console.log("je me joue toute seule");
})();

(() => {
  console.log("je me joue aussi toute seule");
})();

function add2() {
  let a = 4;
  console.log(a);
  return a + 2;
}
add2();

let Total = 0;

function addition(x,y) {
  total = x + y
 return total;
}
function addition(x) {
 total += x;
 return total;
}







 



