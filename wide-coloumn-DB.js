use("AlatIOT")


db.iotWideColumnDB.insertMany([
  {
    device_id: "device1",
    nama: "Sensor Gas MQ-2",
    gas: true,
    asap: true,
    merk: "Hanwei"
  },
  {
    device_id: "device2",
    nama: "Sensor Suhu DHT22",
    suhu: true,
    kelembaban: true,
    merk: "Aosong"
  },
  {
    device_id: "device3",
    nama: "Sensor Jarak HC-SR04",
    jarak: true,
    ultrasonic: true,
    merk: "Generic"
  },
  {
    device_id: "device4",
    nama: "Modul WiFi ESP32",
    wifi: true,
    bluetooth: true,
    mikrokontroler: true,
    merk: "Espressif"
  },
  {
    device_id: "device5",
    nama: "Sensor Kelembaban Tanah YL-69",
    kelembaban_tanah: true,
    analog: true,
    merk: "YL"
  }
]);
