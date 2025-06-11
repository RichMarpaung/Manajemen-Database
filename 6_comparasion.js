//Digunakan untuk membandingkan nilai: $eq, $ne, $gt, $gte, $lt, $lte, dll.

db.nama.find({ kategori: { $eq: "Sensor" } })

db.nama.find({ $expr: { $gt: [ { $strLenCP: "$nama_alat" }, 15 ] } })

db.nama.find({ merk: { $in: ["Generic", "DFRobot"] } })