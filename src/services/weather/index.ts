import { Weather, ReducerPath, Method } from '~constants';
import { api } from '../api';

export const weatherApi = api(ReducerPath.WEATHER_API).injectEndpoints({
  endpoints: build => ({
    getWeather: build.query<IWeatherData[], void>({
      query: () => ({
        url: Weather.Get_WEATHER,
        method: Method.GET,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetWeatherQuery } = weatherApi;
