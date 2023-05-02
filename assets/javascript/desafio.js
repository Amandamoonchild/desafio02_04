let entrada = prompt("Escreva uma frase"); //recebe frase
let spli = entrada.split(' ');
let vazio = 0

for (let check = 0; check < spli.length; check++) {
    if (spli[check] == '') {
        vazio++
    }
}

console.log(spli.length - vazio)