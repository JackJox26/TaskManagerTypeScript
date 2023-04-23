--Affiche l'ensemble des Task trié par ordre décroissant de priorité
VERBE: GET

--- Créer une task
URL: http://localhost:3002/api/task/
Verbe: POST
Entre body raw : {title: string, description : string , priorite : integer}

---Modifie une task
URL: http://localhost:3002/api/task/{id}
Verbe: PATCH
Entre body raw: {title : string, description : string, }

---Supprime une task
URL: http://localhost:3002/api/task/{id}
Verbe: DELETE

---
URL: http://localhost:3002/api/task/{id}
VERBE: PUT

---
URL: http://localhost:3002/api/task/{id}
VERBE: GET

---
URL: http://localhost:3002/api/task/tag
VERBE: GET

---
URL: http://localhost:3002/api/task/tag
VERBE: POST
ENTREE BODY: { title: string, tasks: string }
---

