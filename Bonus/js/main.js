var nome = prompt ("Inserisci il tuo nome");
console.log (nome);

var cognome = prompt ("Inserisci il tuo cognome");
console.log (cognome);

var colore = prompt ("Inserisci il tuo colore preferito");
console.log (colore);

document.getElementById ("password").innerHTML = nome + cognome + colore + "21";

document.getElementById ("nome").innerHTML = nome ;