migrate((db) => {
  const collection = new Collection({
    "id": "gcful3a6wrvp7lf",
    "created": "2023-01-21 17:46:22.228Z",
    "updated": "2023-01-21 17:46:22.228Z",
    "name": "todoapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cqxwwxnj",
        "name": "task",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gcful3a6wrvp7lf");

  return dao.deleteCollection(collection);
})
