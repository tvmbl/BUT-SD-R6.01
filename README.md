# Récupération du cours et des TP

Le plus simple est de cloner ce repo et de lancer une ligne de commandes Python depuis le répertoire où il été cloné :

```
python -m http.server
```

Le cours interactif sera visible à l'adresse http://localhost:8000. Un lien vers la version PDF est fourni ; ce PDF est aussi présent dans le sous-répertoire `cours`.


# Génération du PDF

Si besoin de regénérer le PDF...

```
cd cours

docker run --rm -t --net=host -v `pwd`:/slides ghcr.io/astefanutti/decktape reveal http://localhost:8000/cours cours.pdf
```
