let nb_floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? (entre 1 & 25)");

for (let i = 1; i <= nb_floor; i++) {
    let row = '';

    for (let j = 1; j <= (nb_floor - i); j++) {
        row += ' ';
    }

    for (let k = 1; k <= i; k++) {
        row += "#";       
    }

    console.log(row);
}