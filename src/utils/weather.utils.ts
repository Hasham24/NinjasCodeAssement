import { colors } from '~theme';

const weatherBackgrounds: Record<string, string> = {
  Sunny: colors.yellow, // ☀️
  Cloudy: colors.mildGray, // ☁️
  Rainy: colors.lightBlue, // 🌧
  Default: colors.white,
};

export function getWeatherBackgroundColor(weatherType: string): string {
  return weatherBackgrounds[weatherType] || weatherBackgrounds.Default;
}
