import axios from "axios";
import Head from "next/head";

import styles from "../styles/Home.module.css";
export const getStaticProps = async () => {
  const Key_Api = "558db73e706248a926248f6e135d7472";
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=${Key_Api}&units=metric&lang=vi`
  );
  const data = await res.data;
  return {
    props: { dataWeather: data },
  };
};
export default function Home({ dataWeather }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
          />
          <h4>Temperature: {dataWeather.main.temp_max} </h4>
          <p>Main: {dataWeather.weather[0].main}</p>
          <p>Humidity: {dataWeather.main.humidity}%</p>
          <p>Wind: {dataWeather.wind.speed}KM/H</p>
        </div>
      </main>
    </div>
  );
}
