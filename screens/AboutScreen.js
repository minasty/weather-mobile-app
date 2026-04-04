import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.text}>
        Weather App provides real-time weather, air quality, and UV index data
        for cities worldwide.
      </Text>

      <Text style={styles.subtitle}>Developer</Text>
      <Text style={styles.text}>Anastase Minani</Text>

      <Text style={styles.subtitle}>Copyright</Text>
      <Text style={styles.text}>
        © 2026 Anastase Minani. All rights reserved.
      </Text>

      <Text style={styles.subtitle}>Privacy Policy</Text>
      <Text style={styles.text}>
        This app uses third-party services such as OpenWeatherMap to fetch weather data.
        No personal data is stored.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});