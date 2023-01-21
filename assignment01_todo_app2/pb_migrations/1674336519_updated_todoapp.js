migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcful3a6wrvp7lf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmladjba",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcful3a6wrvp7lf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmladjba",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
