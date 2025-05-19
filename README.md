# Caramblagues-back

Mini API de blagues type Carambar pour démonstration technique.

## 🚀 Stack technique

- **Node.js**
- **Express**
- **Sequelize**
- **SQLite3**
- **Swagger (swagger-jsdoc + swagger-ui-express)**
- **Nodemon** (dev)

---

## 📚 Fonctionnalités

Cette API REST propose quatre endpoints autour d’un modèle de blague simple (`from`, `question`, `answer`) :

- `GET /blagues` : récupère toutes les blagues
- `GET /blagues/:id` : récupère une blague par son ID
- `GET /blagues/random` : récupère une blague aléatoire
- `POST /blagues` : ajoute une nouvelle blague

La documentation complète de l'API est accessible via Swagger à l'adresse [`/api-docs`](http://localhost:8080/api-docs) (une fois le serveur lancé).

---

## 🛠️ Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/ton-utilisateur/caramblagues-back.git
   cd caramblagues-back
   ```

2. Installez les dépendances:

   ```bash
   npm install
   ```

3. Configurer le port (optionnel):
   Créez un fichier .env à la racine du projet:

   ```ini
   PORT=8080
   ```

4. Lancez le serveur:

   ```bash
   npm start
   ```

## 🗂️ Architecture du projet

Ce projet suit une architecture **MVC** simplifiée:

    ```bash
    caramblagues-back/
    │
    ├── .env                  # Configuration du port (optionnelle)
    ├── index.js              # Point d’entrée, démarre l’app + appel au seed
    ├── scripts/
    │   └── seed.js           # Initialisation de la base avec des données de test
    │
    └── src/
        ├── app.js                  # Configuration principale d’Express
        ├── config/
        │   └── swaggerOption.js    # Configuration de Swagger
        ├── controllers/
        │   └── controllers.js      # Logique des routes (GET, POST, etc.)
        ├── database/
        │   └── db.js               # Initialisation Sequelize + SQLite
        ├── model/
        │   └── joke.js             # Définition du modèle de blague
        └── routes/
            └── routes.js           # Définition des endpoints Express

    ```

## 🌐 Déploiement

- Le projet est prévu pour être déployé sur Render pour la partie back.

- Une interface minimaliste en GitHub Pages est prévue pour interagir avec l’API (affichage de blague).

## 📝 Remarques

- Swagger est déjà en place et permet de tester les endpoints directement depuis git checkout/api-docs.

- Bien que le projet soit simple, il illustre une attention portée à la clarté du code, la séparation des responsabilités et la documentation.
