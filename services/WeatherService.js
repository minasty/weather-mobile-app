import { WEATHER_API_KEY } from '@env';
const API_KEY = WEATHER_API_KEY;

export const getWeatherData = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();

  const lat = data.coord.lat;
  const lon = data.coord.lon;

  const airRes = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const airData = await airRes.json();

  const uvRes = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const uvData = await uvRes.json();

  return {
    weather: data,
    air: airData,
    //uv: uvData.current.uvi,
    uv:'low',
  };
};