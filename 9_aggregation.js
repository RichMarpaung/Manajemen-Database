db.nama.aggregate([
  { $group: { _id: "$kategori", total: { $sum: 1 } } }
])

db.nama.aggregate([
  { $match: { kategori: "Sensor" } },
  { $group: { _id: "$merk", total_sensor: { $sum: 1 } } }
])