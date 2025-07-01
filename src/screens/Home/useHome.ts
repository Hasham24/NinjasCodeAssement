import { useGetWeatherQuery } from '~services';

export default () => {
  const { data, isLoading, error } = useGetWeatherQuery();
  return { data, isLoading, error };
};
