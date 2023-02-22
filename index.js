// On récupère les différentes variables / constantes
let tanks = document.querySelector("#numberOfTank");
const displayTank = document.querySelector("#displayTank");
const oupsBtn = document.querySelector("#oups");
const pumpingTank = document.querySelector("#pumpingTank");
const calculateVisco = document.querySelector('.btn');

const forty = 40;
const twenty = 20;

// Fonction display pour afficher le nombre de bacs voulu en bouclant
const display = () => {
    tanks = tanks.value;
    for (let i = 1; i <= tanks; i++) {
        pumpingTank.innerHTML += `
        <div class="tank">
        <p>Bac ${i}</p>
        <form>
        <div class="info>
        <label for="visco${i}">Visco bac ${i}</label><br>
        <input type="text" id="visco40Bac${i}" name="visco${i}"><br>
        </div>
        <div class="info">
        <label for="volume${i}">Volume</label><br>
        <input type="text" id="volumeBac${i}" name="volume${i}">
        </div>
        </form>
        </div>
        `;
    };
    
    calculateVisco.innerHTML = `
        <input type="button" id="calculVisco" value="Calculer">
    `;
}

// Calcul de la visco
const calcul = () => {
    // On récupère les visco et les volumes en fonctions du nombre de bacs
    if (document.querySelector("#visco40Bac4")) {
        let visco40Bac1 = document.querySelector('#visco40Bac1').value;
        let visco40Bac2 = document.querySelector('#visco40Bac2').value;
        let visco40Bac3 = document.querySelector('#visco40Bac3').value;
        let visco40Bac4 = document.querySelector('#visco40Bac4').value;
        
        let volumeBac1 = document.querySelector('#volumeBac1').value;
        let volumeBac2 = document.querySelector('#volumeBac2').value;
        let volumeBac3 = document.querySelector('#volumeBac3').value;
        let volumeBac4 = document.querySelector('#volumeBac4').value;

        if (visco40Bac1.includes(",") || visco40Bac2.includes(",") || visco40Bac3.includes(",") || visco40Bac4.includes(",")) {
            visco40Bac1 = visco40Bac1.replace(",", ".");
            visco40Bac2 = visco40Bac2.replace(",", ".");
            visco40Bac3 = visco40Bac3.replace(",", ".");
            visco40Bac4 = visco40Bac4.replace(",", ".");
        }
        
        if ((Number(visco40Bac1) >= 2 && Number(visco40Bac1) <= 4.5) && (Number(visco40Bac2) >= 2 && Number(visco40Bac2) <= 4.5) && (Number(visco40Bac3) >= 2 && Number(visco40Bac3) <= 4.5) && (Number(visco40Bac4) >= 2 && Number(visco40Bac4) <= 4.5)) {
            if (Number(volumeBac1) < Number(volumeBac2) && Number(volumeBac2) < Number(volumeBac3) && Number(volumeBac3) < Number(volumeBac4)) {                
                let volume1 = Number(volumeBac2) - Number(volumeBac1);                
                let volume2 = Number(volumeBac3) - Number(volumeBac2);                
                let volume3 = Number(volumeBac4) - Number(volumeBac3);                
                
                let visco40 = ((Number(volumeBac1) * Number(visco40Bac1)) + (Number(volume1) * Number(visco40Bac2)) + (Number(volume2) * Number(visco40Bac3)) + (Number(volume3) * Number(visco40Bac4))) / Number(volumeBac4);
                visco(visco40);
                // alert('visco et volume OK');
            } else {
                alert("Attention, au moins un des volume n'est pas bon!");
            }
        } else {
            alert ("Attention, au moins une des visco n'est pas bonne!");
            if (volumeBac1 < volumeBac2 && volumeBac2 < volumeBac3 && volumeBac3 < volumeBac4) {
            } else {
                alert("Les visco et les volumes ne sont pas bons!");
            }
        }

    } else if (document.querySelector("#visco40Bac3")) {
        let visco40Bac1 = document.querySelector('#visco40Bac1').value;
        let visco40Bac2 = document.querySelector('#visco40Bac2').value;
        let visco40Bac3 = document.querySelector('#visco40Bac3').value;

        let volumeBac1 = document.querySelector('#volumeBac1').value;
        let volumeBac2 = document.querySelector('#volumeBac2').value;
        let volumeBac3 = document.querySelector('#volumeBac3').value;

        if (visco40Bac1.includes(",") || visco40Bac2.includes(",") || visco40Bac3.includes(",")) {
            visco40Bac1 = visco40Bac1.replace(",", ".");
            visco40Bac2 = visco40Bac2.replace(",", ".");
            visco40Bac3 = visco40Bac3.replace(",", ".");
        }
        
        if ((Number(visco40Bac1) >= 2 && Number(visco40Bac1) <= 4.5) && (Number(visco40Bac2) >= 2 && Number(visco40Bac2) <= 4.5) && (Number(visco40Bac3) >= 2 && Number(visco40Bac3) <= 4.5)) {
            if (Number(volumeBac1) < Number(volumeBac2) && Number(volumeBac2) < Number(volumeBac3)) {                
                let volume1 = Number(volumeBac2) - Number(volumeBac1);                
                let volume2 = Number(volumeBac3) - Number(volumeBac2);                
                
                let visco40 = ((Number(volumeBac1) * Number(visco40Bac1)) + (Number(volume1) * Number(visco40Bac2)) + (Number(volume2) * Number(visco40Bac3))) / Number(volumeBac3);
                visco(visco40);
                // alert('visco et volume OK');
            } else {
                alert("Attention, au moins un des volume n'est pas bon!");
            }
        } else {
            alert ("Attention, au moins une des visco n'est pas bonne!");
            if (volumeBac1 < volumeBac2 && volumeBac2 < volumeBac3 && volumeBac3 < volumeBac4) {
            } else {
                alert("Les visco et les volumes ne sont pas bons!");
            }
        }

    } else if (document.querySelector("#visco40Bac2")) {
        let visco40Bac1 = document.querySelector('#visco40Bac1').value;
        let visco40Bac2 = document.querySelector('#visco40Bac2').value;

        let volumeBac1 = document.querySelector('#volumeBac1').value;
        let volumeBac2 = document.querySelector('#volumeBac2').value;

        if (visco40Bac1.includes(",") || visco40Bac2.includes(",")) {
            visco40Bac1 = visco40Bac1.replace(",", ".");
            visco40Bac2 = visco40Bac2.replace(",", ".");
        }
        
        if ((Number(visco40Bac1) >= 2 && Number(visco40Bac1) <= 4.5) && (Number(visco40Bac2) >= 2 && Number(visco40Bac2) <= 4.5)) {
            if (Number(volumeBac1) < Number(volumeBac2)) {                
                let volume1 = Number(volumeBac2) - Number(volumeBac1);                
                
                let visco40 = ((Number(volumeBac1) * Number(visco40Bac1)) + (Number(volume1) * Number(visco40Bac2))) / Number(volumeBac2);
                visco(visco40);
                // alert('visco et volume OK');
            } else {
                alert("Attention, au moins un des volume n'est pas bon!");
            }
        } else {
            alert ("Attention, au moins une des visco n'est pas bonne!");
            if (volumeBac1 < volumeBac2 && volumeBac2 < volumeBac3 && volumeBac3 < volumeBac4) {
            } else {
                alert("Les visco et les volumes ne sont pas bons!");
            }
        }

    } else if (document.querySelector("#visco40Bac1")) {
        let visco40Bac1 = document.querySelector('#visco40Bac1').value;

        let volumeBac1 = document.querySelector('#volumeBac1').value;

        if (visco40Bac1.includes(",")) {
            visco40Bac1 = visco40Bac1.replace(",", ".");
        }
        
        if ((Number(visco40Bac1) >= 2 && Number(visco40Bac1) <= 4.5)) {
            if (Number(volumeBac1)) {                                
                
                let visco40 = Number(visco40Bac1);
                visco(visco40);
                // alert('visco et volume OK');
            } else {
                alert("Attention, au moins un des volume n'est pas bon!");
            }
        } else {
            alert ("Attention, au moins une des visco n'est pas bonne!");
            if (volumeBac1 < volumeBac2 && volumeBac2 < volumeBac3 && volumeBac3 < volumeBac4) {
            } else {
                alert("Les visco et les volumes ne sont pas bons!");
            }
        }

    } else {
        console.log("Pas de bacs selectionnés");
    }

}

const reset = () => {
    location.reload();
}

const visco = (visco40) => {
    // Premier calcul pour simplifier le reste du calcul
    let Y = Number(visco40)+0.7+Math.exp(-1.47-1.84*Number(visco40)-0.51*Math.pow(Number(visco40), 2));
    // Deuxième calcul pour simplification du calcul
    let x = Math.pow(((273.15+Number(forty))/(273.15+Number(twenty))), 3.92);
    let X = Math.pow(Number(Y), x);
          
    // Fin du calcul, variable visco20
    let visco20 = Number(X)-0.7-Math.exp(-0.7487-3.295*(Number(X)-0.7)+0.6119*Math.pow((Number(X)-0.7), 2)-0.3193*Math.pow((Number(X)-0.7), 3));
          
    // Affichage de la visco à 20°C;
    alert(`La visco à 20° est de ${visco20.toFixed(3)}`); 
}

displayTank.addEventListener('click', display);
oupsBtn.addEventListener('click', reset);
calculateVisco.addEventListener('click', calcul);
