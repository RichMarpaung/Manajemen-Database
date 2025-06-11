db.nama.updateOne(
  { nama_alat: "Buzzer" },
  { $set: { merk: "Generic" } }
)

db.nama.updateMany(
  { kategori: "Output" },
  { $set: { kategori: "Display Output" } }
)