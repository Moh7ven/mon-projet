import prompt from "prompt-sync";
import { v4 as uuidv4 } from 'uuid';
/* import { readFileSync, writeFileSync} from "node:fs"; */

let database = {};
database.cours = [];
database.profs = [];
database.etudiants = [];

//extraire les donnees dans l'objet table
const cours = database.cours;
const profs = database.profs;
const etudiants = database.etudiants;
cours.push({
  id: uuidv4(),
  titre: "chimie",
  description: "Ce cours est une introduction de la chimie generale",
  prof: "",
  inscrits: [],
});
console.log("cours", cours);

let prof = {
  id: uuidv4(),
  nom: "Bakary",
  prenom: "Konate",
  email: "prof1@gmail.com",
  cours: "chimie",
};
profs.push(prof);
cours.prof = prof.nom;

// demander de taper l'email de l'utilisateur
let nouvoEmail = prompt()("taper le nouvel email: ");
//demande de tapper le nouveau prenom et nom
let nouvoPrenom = prompt()("taper le nouveau prenom: ");
let nouvoNom = prompt()("taper le nouveau nom: ");

let nouvoEtudiant = {
  id: uuidv4(),
  nom: nouvoNom,
  prenom: nouvoPrenom,
  email: nouvoEmail,
};

let inscrits = cours[cours.length - 1].inscrits;
inscrits.push(nouvoEtudiant.email);
etudiants.push(nouvoEtudiant);

/* let donneeJson = JSON.stringify(database);

writeFileSync("database.json", donneeJson, { flag: 'w' }, "utf-8", (err) => {
    if (err) throw err;
    console.log("database enregistées");
  }); */

//afficher les donnees au terminal
/* console.log("voici data apres modification(Objet)", donneeJson); */
console.log("voici data apres modification(Objet)", database);