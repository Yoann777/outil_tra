// Génère les champs de saisie dès le chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    generateFields();
});

// Génère les champs en fonction du nombre de bacs sélectionné
function generateFields() {
    let bacCount = document.getElementById("bacCount").value;
    let container = document.getElementById("inputContainer");
    container.innerHTML = "";

    for (let i = 1; i <= bacCount; i++) {
			
		let inputHTML = `
            <div class="conteneurVisco">
				<label for="volume${i}">Volume du bac ${i} :</label>
				<input type="number" id="volume${i}" required>
			
				<label for="visco${i}">Viscosité, à 40°C, du bac ${i} :</label>
				<input type="number" id="visco${i}" required>
            </div>
        `;
        container.innerHTML += inputHTML;
    }
}

// Fonction pour calculer la viscosité moyenne et afficher dans une popup
function calculateViscosity() {
    let bacCount = parseInt(document.getElementById("bacCount").value);
    let volumes = [];
    let viscosities = [];

    for (let i = 1; i <= bacCount; i++) {
        let volume = parseFloat(document.getElementById(`volume${i}`).value);
        let visco = parseFloat(document.getElementById(`visco${i}`).value);

        if (isNaN(volume) || isNaN(visco) || volume <= 0 || visco <= 0) {
            alert("Veuillez entrer des valeurs valides.");
            return;
        }

        // Ajout de la condition sur la viscosité
        if (visco < 2 || visco > 4.5) {
            alert("Mauvaise viscosité renseignée. Elle doit être comprise entre 2 et 4.5.");
            return;
        }

        volumes.push(volume);
        viscosities.push(visco);
    }

    // Vérification des volumes (doivent être croissants)
    for (let i = 1; i < volumes.length; i++) {
        if (volumes[i] <= volumes[i - 1]) {
            alert("Les volumes doivent être en ordre croissant.");
            return;
        }
    }

    // Calcul de la viscosité moyenne à 40°C
    let Vn = volumes[volumes.length - 1];  // Dernier volume (total)
    let viscositySum = 0;

    for (let i = 0; i < bacCount; i++) {
        let Vi = volumes[i];
        let vi = viscosities[i];

        if (i === 0) {
            viscositySum += Vi * vi;
        } else {
            viscositySum += (Vi - volumes[i - 1]) * vi;
        }
    }

    let viscosityAvg40 = viscositySum / Vn; // Viscosité moyenne à 40°C

    // Conversion en viscosité à 20°C
    let viscosityAvg20 = convertViscosity40To20(viscosityAvg40);

    // Affichage dans la popup
    showPopup(viscosityAvg40.toFixed(3), viscosityAvg20);
}

// Fonction pour convertir la viscosité de 40°C à 20°C
function convertViscosity40To20(visco40) {
    const forty = 40;
    const twenty = 20;

    let Y = visco40 + 0.7 + Math.exp(-1.47 - 1.84 * visco40 - 0.51 * Math.pow(visco40, 2));
    let x = Math.pow((273.15 + forty) / (273.15 + twenty), 3.92);
    let X = Math.pow(Y, x);

    let visco20 = X - 0.7 - Math.exp(-0.7487 - 3.295 * (X - 0.7) + 0.6119 * Math.pow((X - 0.7), 2) - 0.3193 * Math.pow((X - 0.7), 3));

    return visco20.toFixed(3);
}

// Affichage de la popup avec les résultats
function showPopup(visco40, visco20) {
    let popup = document.getElementById("popup");
    let resultDiv = document.getElementById("popupResult");

    resultDiv.innerHTML = `
        <h3>Résultat</h3>
        <p><strong>Visco à 20°C :</strong> ${visco20}</p>
    `;

    popup.style.display = "block";
}

// Fermeture de la popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}