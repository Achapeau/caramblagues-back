const swaggerJSDoc = require("swagger-jsdoc");
const { param, request } = require("../app");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Caramblagues API",
      version: "1.0.0",
      description:
        "<p>Caramblagues API documentation</p><p>Données simulées</p>",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
    tag: [
      {
        name: "Joke",
        description: "Tout ce qui concerne les blagues",
      },
    ],
    paths: {
      "/caramblagues-back/blagues": {
        get: {
          tags: ["Joke"],
          summary: "Obtenir la liste de toutes les blagues",
          operationId: "getAllJokes",
          responses: {
            200: {
              description: "renvoie la liste de toutes les blagues",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/ArrayOfJokes",
                    },
                  },
                },
              },
            },
            404: {
              description: "Renvoie une erreur, aucun élément trouvé",
            },
            500: {
              description: "Erreur serveur",
            },
          },
        },
        post: {
          tags: ["Joke"],
          summary: "Créer une nouvelle blague",
          operationId: "createJoke",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/NewJoke",
                },
              },
            },
          },
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Joke",
              },
            },
          },
          responses: {
            201: {
              description: "renvoie la nouvelle blague",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Joke",
                  },
                },
              },
            },
            500: {
              description: "Erreur serveur, blague non créée",
            },
          },
        },
      },
      "/caramblagues-back/blagues/random": {
        get: {
          tags: ["Joke"],
          summary: "Obtenir une blague au hasard",
          operationId: "getRandomJoke",
          responses: {
            200: {
              description: "renvoie une blague au hasard",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Joke",
                  },
                },
              },
            },
            404: {
              description: "Renvoie une erreur, aucun élément trouve",
            },
            500: {
              description: "Erreur serveur",
            },
          },
        },
      },
      "/caramblagues-back/blagues/{id}": {
        get: {
          tags: ["Joke"],
          summary: "Obtenir une blague par son id",
          operationId: "getJokeById",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "renvoie une blague par son id",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Joke",
                  },
                },
              },
            },
            404: {
              description: "Renvoie une erreur, aucun élément trouve",
            },
            500: {
              description: "Erreur serveur",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Joke: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            from: {
              type: "string",
            },
            question: {
              type: "string",
            },
            answer: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
        ArrayOfJokes: {
          type: "array",
          items: {
            $ref: "#/components/schemas/Joke",
          },
          example: [
            {
              id: 1,
              from: "Papa",
              question: "Qu'est ce qu'il y a de bien en Suisse ?",
              answer: "Je ne sais pas, mais la drapeau est un gros plus !",
              createdAt: "2023-03-08T15:30:00.000Z",
              updatedAt: "2023-03-08T15:30:00.000Z",
            },
            {
              id: 2,
              from: "Maman",
              question: "Quels sont les deux types d'humours ?",
              answer:
                "Il y a l'humour de répétion, et l'humour de répétition, et l'humour de répétition, et l'humour de répétion...",
              createdAt: "2023-03-08T15:30:00.000Z",
              updatedAt: "2023-03-08T15:30:00.000Z",
            },
          ],
        },
        NewJoke: {
          type: "object",
          properties: {
            from: {
              type: "string",
            },
            question: {
              type: "string",
            },
            answer: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
