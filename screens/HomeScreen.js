import React, { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { getWeatherData } from '../services/WeatherService';
import WeatherCard from '../components/WeatherCard';
import AirQualityCard from '../components/AirQualityCard';
import RadiationCard from '../components/RadiationCard';
import styles from '../styles/GlobalStyles';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [air, setAir] = useState(null);
  const [uv, setUv] = useState(null);

  const handleFetch = async () => {
    const data = await getWeatherData(city);
    setWeather(data.weather);
    setAir(data.air);
    setUv(data.uv);
  };

  return (
    <ImageBackground
      source={require('../assets/nature.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Weather App</Text>

        <TextInput
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />

       
        <TouchableOpacity style={styles.button} onPress={handleFetch}>
        <Text style={styles.text}>Get weather info</Text>
        </TouchableOpacity>

        {weather && <WeatherCard weather={weather} />}
        {air && <AirQualityCard air={air} />}
        {uv!== null && <RadiationCard uv={uv} />}

        <TouchableOpacity style={styles.button} onPress={() => {
            if (weather && weather.coord) {
              navigation.navigate('Map', {
                lat: weather.coord.lat,
                lon: weather.coord.lon,
                city: city
              });
            }
          }}>
        <Text style={styles.text}>View on map</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.aboutText}>About App</Text>
        </TouchableOpacity>

      </ScrollView>
    </ImageBackground>
  );
}