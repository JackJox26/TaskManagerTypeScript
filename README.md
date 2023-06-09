# Back

## La structure

- src : code source

- docs : la documentation de openapi3

- test : avec postman ou automatisé

- RESPONSE.md : ce sont mes choix

## Structure du dossier src

Le dossier src a été créé en pensant séparation des responsabilités

openapi: 3.0.0
# Added by API Auto Mocking Plugin
servers:
  - description: localhost
    url: http://localhost:3002/api
info:
  description: Cloud TP Note
  version: '1.0.0'
  title: Cloud TP Note
  contact:
    email: nocompany@gmail.com
  license:
    name: Apache 2.0
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
tags:
  - name: books
    description: API pour mes bouquins

components:
  schemas:
    Task:
      type: object
      required:
        - id
        - title
        - priorite
      properties:
        id:
          type: string
          format: id
          example: 0beda6e7-874b-4319-8651-2e3aba504463
        title:
          type: string
          example: livre unique
        description:
          type: string
          example: unique et important
        priorite:
          type: integer
          example: 4
    Tag:
      type: object
      required:
        - id
        - title
        - priorite
      properties:
        id:
          type: string
          format: id
          example: 81e76aea-70d6-4be3-a82a-5f521540add5
        title:
          type: string
          example: livre unique

paths:
  /Task:
    get:
      operationId: GetAllTasks
      description: Il récupère tous les tasks présent
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Task'
    post:
      operationId: Postbook
      description: il va créer un task
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Task'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
  /Task/{id}:
    get:
      operationId: GetTask
      description: il récupère une tache par son id
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: id
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
    patch:
      operationId: UpdateTask
      description: il met a jour une tache
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: id
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Task'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
    delete:
      operationId: DelTask
      description: il supprime une tache par son id
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: id
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
  /Tag:
    get:
      operationId: GetAllTaskssSorted
      description: Récupère tous les tasks par ordre
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Tag'
    post:
      operationId: CreateTag
      description: il va créer un tag
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Tag'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Tag'
    
    get:
      operationId: GetTag
      description: il va récupérer un tag
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Tag'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Tag'


- main.ts :c'est le point d'entrée de l'app
- config.ts :ce sont les variable env de l'app
- infrastructure : ce sont les dépendance externe de l'app
- contexts : ce sont les contexts de l'app

## Executer le projet
1. exécuter la commande : npm install
2. exécuter la commande : npm update
3. exécuter la commande : npm run db:generate
4. exécuter la commande : npm run db:migrate
5. lancer le projet avec la commande : npm run serve
