import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import gundarLogo from "../../assets/pngegg.png";
import { ReactComponent as SubmitIcon } from "../../assets/enter_icon.svg";
import styles from "./Chart.module.css"; // Import CSS module

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [userName, setUserName] = useState("");
  const [enteredName, setEnteredName] = useState("");

  useEffect(() => {
    const sensorRef = ref(database, "alat/sensor_emg");
    onValue(sensorRef, (snapshot) => {
      const emgValue = snapshot.val();
      console.log("Updated data from Firebase:", emgValue); // Log the updated data
      setData((prevData) => [...prevData, emgValue]);
      setLabels((prevLabels) => [
        ...prevLabels,
        new Date().toLocaleTimeString(),
      ]);
    });
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sensor Value",
        data: data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0)", // transparan
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Densitas Otot",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 6000, // set maximum value for y-axis
      },
    },
  };

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnteredName(userName);
  };

  const handleReset = () => {
    setUserName("");
    setEnteredName("");
  };

  const getMessageAndColor = (value) => {
    if (value === 0) {
      return {
        message: "Idle",
        color: styles.baseText,
      };
    } else if (value < 200) {
      return { message: "Anda kurang olahraga", color: styles.red };
    } else if (value < 600) {
      return { message: "Normal", color: styles.green };
    } else {
      return { message: "Sering berolahraga", color: styles.green };
    }
  };

  const lastValue = data.length > 0 ? data[data.length - 1] : null;
  const { message, color } =
    lastValue !== null
      ? getMessageAndColor(lastValue)
      : { message: "", color: "" };

  return (
    <section className={styles.chartSection}>
      <div className={styles.chartFlex}>
        <img src={gundarLogo} alt="gundarLogo" />{" "}
        <div className={styles.container}>
          <div className={styles.chartWrapper}>
            <Line data={chartData} options={options} />
          </div>
          <h1 className={styles.lastValue}>{lastValue}</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="Masukkan nama Anda"
                className={styles.input}
              />
              <button type="submit" className={styles.submitButton}>
                <SubmitIcon className={styles.icon} />
              </button>
            </div>
            <button type="button" onClick={handleReset} className={styles.resetButton}>
              Reset
            </button>
          </form>
          {enteredName && (
            <div className={styles.result}>
              <h2>Nama: {enteredName}</h2>
              <p>Jumlah Densitas Otot Terakhir: {lastValue}</p>
              {lastValue !== null && (
                <div className={`${styles.message} ${color}`}>
                  <p>{message}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Chart;
