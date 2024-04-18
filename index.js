const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";// Initialise des chaînes pour les lettres minuscules.
const dataUppercase = dataLowercase.toUpperCase();// Crée une version en majuscules de la chaîne des minuscules.
const dataNumbers = "0123456789";// Initialise une chaîne de chiffres.
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";// Initialise une chaîne de symboles spéciaux.
const rangeValue = document.getElementById("password-length");// Sélectionne l'élément DOM pour la longueur du mot de passe.
const passwordOutput = document.getElementById("password-output");// Sélectionne l'élément DOM où le mot de passe généré sera affiché.

function generatePassword() {// Définit la fonction pour générer un mot de passe.
  let data = [];  // Initialise un tableau pour stocker les caractères possibles du mot de passe.
  let password = "";  // Initialise une chaîne vide pour le mot de passe.

  if (lowercase.checked) data.push(...dataLowercase);  // Ajoute des minuscules au tableau data si l'option est cochée.
  if (uppercase.checked) data.push(...dataUppercase);  // Ajoute des majuscules au tableau si l'option est cochée.
  if (numbers.checked) data.push(...dataNumbers);  // Ajoute des chiffres au tableau si l'option est cochée.
  if (symbols.checked) data.push(...dataSymbols);  // Ajoute des symboles au tableau si l'option est cochée.

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");  // Affiche une alerte si aucun type de caractère n'est sélectionné.
    return;
  }

    // Génère le mot de passe en sélectionnant des caractères aléatoires du tableau.
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;  // Affiche le mot de passe généré dans l'élément passwordOutput.


  passwordOutput.select();  // Sélectionne le texte du mot de passe généré.

  navigator.clipboard.writeText(passwordOutput.value);  // Copie le mot de passe généré dans le presse-papiers.


  generateButton.textContent = "Copié !";  // Change le texte du bouton après la copie.

  // Réinitialise le texte du bouton après un délai.

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);// Ajoute un écouteur d'événements pour générer le mot de passe lorsque le bouton est cliqué.

