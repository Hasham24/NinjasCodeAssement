import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import useWeather from './useWeather';
import useStyle from './styles';

const Weather = () => {
  const styles = useStyle();
  const { city, setCity, weatherData, handleSearch, error } = useWeather();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Search" onPress={handleSearch} />
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : weatherData ? (
          <View style={styles.weatherBox}>
            <Text style={styles.city}>{weatherData.city}</Text>
            <Text style={styles.temp}>{weatherData.temperature}°C</Text>
            <Text style={styles.weather}>{weatherData.weather}</Text>
            <Text style={styles.desc}>{weatherData.description}</Text>
            <Text style={styles.info}>Humidity: {weatherData.humidity}%</Text>
            <Text style={styles.info}>Wind: {weatherData.windSpeed} km/h</Text>
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Weather;
