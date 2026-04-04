import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/GlobalStyles';

export default function AirQualityCard({ air }) {
  return (
    <View style={styles.result}>
      <Text>🌫 Air quality index: {air.list[0].main.aqi}</Text>
      <Text>CO: {air.list[0].components.co}</Text>
      <Text>NO₂: {air.list[0].components.no2}</Text>
    </View>
  );
}