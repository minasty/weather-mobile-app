import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/GlobalStyles';

export default function RadiationCard({ uv }) {
  return (
    <View style={styles.result}>
      <Text>
        ☀️ UV Index: {uv === null ? "" : uv}
        
      </Text>
    </View>
  );
}