db.nama.bulkWrite([
  {
    insertOne: {
      document: {
        nama_alat: "LED Merah",
        kategori: "Output",
        fungsi: "Indikator visual",
        merk: "Generic"
      }
    }
  },
  {
    updateOne: {
      filter: { nama_alat: "Fan DC 5V" },
      update: { $set: { merk: "CoolerTech" } }
    }
  },
  {
    deleteOne: {
      filter: { nama_alat: "Solenoid Valve 12V" }
    }
  }
])
