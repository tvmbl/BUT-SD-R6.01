# TP "Workflows" sur GCP - Déroulement

**Prérequis** :
- disposer d'un compte de connexion (du type `compte_xyz@thomasvial.fr`)
- télécharger quelques fichiers MP3 d'exemples depuis le repo Github (répertoire `tp-4/0-Fichiers_MP3`)

NB : il est conseillé de garder 1 onglet ouvert par service dans la suite car on fait des allers-retours entre les services. Il vaut mieux aussi ouvrir le navigateur en navigation privée pour éviter les conflits avec votre compte GMail éventuel.


## 0. Connexion et première navigation dans GCP

Se connecter à l'adresse https://console.cloud.google.com. Renseigner les informations de connexion :
- login = `compte_xyz@thomasvial.fr` (`xyz` variable)
- mot de passe = `compte_xyz!` (idem)

Accepter les conditions d'utilisation.

Choisir le projet `BUT-TP` dans la boîte de sélection en haut à gauche.

Aller dans le service Google Cloud Storage (stockage objet de GCP), soit en utilisant le menu "hamburger" de la console,
soit en tapant une partie du nom du service dans la barre de recherche en haut.

Clicker sur `Buckets` pour voir la liste des buckets. Aller dans celui qui porte le n° de votre compte, et créer dedans
un répertoire `mp3`.

Aller dans le répertoire `mp3` du bucket, y importer quelques fichiers MP3 issus du repo Github.


## 1. Création du workflow

Aller maintenant dans le service Workflows.

Créer un nouveau workflow et changer quelques paramètres :
- nom = un nom unique (par ex. qui fasse référence à votre compte)
- région = `europe-west9` (Paris)
- activer l'historique détaillé des exécutions

Faire "Next" et coller le contenu du fichier YAML de l'étape `1-Workflow_de_base`. Changer l'entrée qui contient le nom du bucket pour correspondre à celui de votre compte.

Déployer le workflow et lancer une exécution : tout doit être vert.

Cliquer sur l'étape du diagramme, et interpréter les traces qui s'affichent.


## 2. Ajout d'une boucle

Modifier le code source du workflow pour correspondre à l'étape `2-Workflow_avec_boucle`, ajuster le nom du bucket.

Redéployer et ré-exécuter : vous pouvez aller voir les journaux, où le workflow logge les fichiers parcourus du bucket.


## 3. Création de la fonction lambda

Aller dans le service "Cloud Run Functions", i.e. le "lambdas" de GCP.

Créer une nouvelle fonction à partir de l'éditeur intégré. Paramètres à affiner :
- nom de la fonction = un nom unique à votre compte
- région = `europe-west9`
- **copier l'URL du point de terminaison et la coller dans un éditeur de texte à côté, on en aura besoin**
- environnement Python 3.10
- régler l'"Ingress" à "Tous"
- dans le réglage du conteneur, spécifier 2 Go de RAM

Valider la création.

Dans l'éditeur en ligne, remplacer le contenu de `main.py` et `requirements.txt` par ceux de l'étape `3-CloudRunFunction`.

Vous devriez avoir un avertissement à propos du point d'entrée : remplacer celui par défaut, dans la boîte de texte au-dessus du code, par le nom de la fonction de notre code à nous (`process_file`).

Lancer le déploiement de la fonction et... attendre quelques minutes. Vous pouvez aller voir les journaux de déploiement (dans un nouvel onglet) si vous le souhaitez, pour suivre la création du conteneur.


## 4. Appel de la fonction depuis le workflow

Modifier le source du workflow à partir de l'étape `4-Workflow_complet` en ajustant le contenu (l'un des paramètres à changer est l'URL de la fonction qu'on a mise de côté à l'étape 3).

Relancer la fonction ; tout devrait être vert encore une fois.

Aller voir le résultat dans le bucket Google Cloud Storage...
