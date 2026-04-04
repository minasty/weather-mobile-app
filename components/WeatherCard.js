import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/GlobalStyles';

export default function WeatherCard({ weather }) {
  return (
    <View style={styles.result}>
      <Text>🌡 Temperature: {weather.main.temp} °C</Text>
      <Text>Pressure: {weather.main.pressure} hPa</Text>
      <Text>💧 Humidity: {weather.main.humidity} %</Text>
      <Text>
        🌧 Rainfall: {weather.rain ? weather.rain['1h'] + " mm" : "No data"}
      </Text>
    </View>
  );
}