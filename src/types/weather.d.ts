interface IWeatherData {
  city: string;
  temperature: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface IWeatherState {
  currentWeather: WeatherData | null;
  recentSearches: WeatherData[];
  favorites: string[];
  isCelsius: boolean;
  isLoading: boolean;
  error: string | null;
  cachedWeather: WeatherData | null;
}

type WeatherType =
  | 'Sunny'
  | 'Cloudy'
  | 'Rainy'
  | 'Partly Cloudy'
  | 'Humid'
  | 'Cold'
  | 'Thunderstorm';

interface IWeatherTheme {
  backgroundColor: string;
  textColor: string;
  iconColor: string;
}
