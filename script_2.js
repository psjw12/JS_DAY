var nb = prompt("Quel factoriel veux-tu calculer");

function factorielle(nb) {
  console.log(nb);
  if (nb < 0)
    console.log("Error rentre un nombre positif");
  else if (nb == 0)
    return 1;
  else
    return nb * factorielle(nb -1);
}

console.log(factorielle(nb));
