migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcful3a6wrvp7lf")

  // remove
  collection.schema.removeField("nqau7cuu")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcful3a6wrvp7lf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqau7cuu",
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
})
