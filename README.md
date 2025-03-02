Stepper pour le Projet de Gestion des Livres avec Node.js et Express.js

[![mern-stack.png](https://i.postimg.cc/5009n92B/mern-stack.png)](https://postimg.cc/1gkZzQ6X)

Étape 1 : Initialisation du Projet

Créer un dossier pour le projet et initialiser npm :

```bash
mkdir book-management
cd book-management
npm init -y
```

Installer les dépendances nécessaires :

```bash
npm install express mongoose cors body-parser
```

Étape 2 : Configuration du Serveur Express

Créer un fichier index.js et configurer Express :

Créer un fichier config.js :

```bash
MONGO_URI=mongodb://localhost:27017/bookdb
```

Étape 3 : Création du Modèle Mongoose

Créer un dossier models et un fichier BookModel.js

Étape 4 : Définition des Routes API

Créer un dossier routes et un fichier booksRoute.js :

Modifier server.js pour inclure les routes :

```bash
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);
```

Étape 5 : Tester les Requêtes avec Postman

Lancer le serveur :

```bash
npm run dev
```

Tester les routes avec Postman :

```bash
GET http://localhost:5000/books → récupérer tous les livres

POST http://localhost:5000/books → ajouter un livre (envoyer { "title": "Titre", "author": "Auteur" } en JSON)

PUT http://localhost:5000/books/:id → modifier un livre

DELETE http://localhost:5000/books/:id → supprimer un livre

```

Étape 6 : Intégration du Frontend (à faire la prochaine séance)

Créer une application React :

```bash
npx create-react-app frontend
```

Configurer Axios et les appels API dans React.


