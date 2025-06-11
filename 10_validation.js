db.runCommand({
  collMod: "nama",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama_alat", "kategori", "fungsi", "merk"],
      properties: {
        nama_alat: { bsonType: "string" },
        kategori: { bsonType: "string" },
        fungsi: { bsonType: "string" },
        merk: { bsonType: "string" }
      }
    }
  },
  validationLevel: "strict"
})