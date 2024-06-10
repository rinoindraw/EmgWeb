import React from "react";
import styles from "./Desc.module.css";

const Desc = () => {
  const description =
    "Alat deteksi otot menggunakan sensor Surface Electromyography (sEMG) berbasis ESP32 memantau aktivitas otot secara real-time melalui Internet of Things (IoT). Sensor sEMG menangkap sinyal listrik dari otot, yang diproses oleh ESP32 dan dikirim nirkabel ke platform monitoring. Ini memungkinkan analisis jarak jauh aktivitas otot melalui aplikasi atau dashboard web, cocok untuk rehabilitasi medis, olahraga, dan penelitian fisiologis.";

  return (
    <div>

      <div className={styles.descContainer}>
      <div className={styles.descWrapper}>
        <h1>Deskripsi Alat</h1>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
};

export default Desc;
