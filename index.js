// Création de la fonction visco pour la conversion de la viscosité d'un gasoil de 40°C à 20°C

// Création des constantes 
const forty = 40;
const twenty = 20;

// Test d'un écouteur d'évènement pour améliorer le fichier
const conversion = document.querySelector('#button');

let visco = () => {
     // On entre la visco à 20°C du produit
     let visco40 = prompt("Quelle est la visco à 40°C du produit?");

     // Si l'utilisateur rentre une valeur avec virgule, on remplace par un point
     if (visco40.includes(",")) {
          visco40 = visco40.replace(',', '.');
     }

     if(visco40 >= 2 && visco40<5){
          // Premier calcul pour simplifier le reste du calcul
          let Y = Number(visco40)+0.7+Math.exp(-1.47-1.84*Number(visco40)-0.51*Math.pow(Number(visco40), 2));

          // Deuxième calcul pour simplification du calcul
          let x = Math.pow(((273.15+Number(forty))/(273.15+Number(twenty))), 3.92);
          let X = Math.pow(Number(Y), x);
          
          // Fin du calcul, variable visco20
          let visco20 = Number(X)-0.7-Math.exp(-0.7487-3.295*(Number(X)-0.7)+0.6119*Math.pow((Number(X)-0.7), 2)-0.3193*Math.pow((Number(X)-0.7), 3));
          
          // Affichage de la visco à 20°C;
          alert(`La visco à 20° est de ${visco20.toFixed(3)}`);
     } else {
          alert("La valeur renseignée n'est pas bonne");
     }
}

conversion.addEventListener('click', visco);