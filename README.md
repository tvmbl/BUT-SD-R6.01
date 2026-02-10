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

sed -e 's/fragment/frgmt/g' < index.html > index_nofrag.html
```

Ensuite, ouvrir http://localhost:8000/cours/index_nofrag.html?print-pdf dans Edge et imprimer en "Save to PDF" avec les options suivantes :
- _Margins : None_
- _Options : Background graphics_

(instructions tirées de https://revealjs.com/pdf-export/ avec l'aide de https://github.com/hakimel/reveal.js/issues/3428)

Sur le PDF résultant certaines images sont un peu décalées mais cela reste lisible.
