db.nama.find({
  $or: [
    { kategori: "Sensor" },
    { kategori: "Output" }
  ]
})

db.nama.find({
  $and: [
    { kategori: "Sensor" },
    { merk: "Generic" }
  ]
})