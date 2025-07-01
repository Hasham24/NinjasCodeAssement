import React from 'react';
import { View, Text } from 'react-native';
import useStyle from './styles';

interface WeatherItemProps {
  data: IWeatherData;
}

const WeatherItem: React.FC<WeatherItemProps> = ({ data }) => {
  const styles = useStyle(data.weather);
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.city}</Text>
      <Text style={styles.temp}>{data.temperature}°C</Text>
      <Text style={styles.weather}>{data.weather}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <View style={styles.row}>
        <Text style={styles.info}>💧 {data.humidity}%</Text>
        <Text style={styles.info}>💨 {data.windSpeed} km/h</Text>
      </View>
    </View>
  );
};

export default WeatherItem;
