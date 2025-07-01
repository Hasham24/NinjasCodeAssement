import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header, SafeScreen, ScreenLoader, WeatherItem } from '~components';
import useHome from './useHome';
import useStyle from './styles';

const Home = () => {
  const styles = useStyle();
  const { t } = useTranslation('home');
  const { data, isLoading } = useHome();
  if (isLoading) {
    return <ScreenLoader />;
  }
  const renderItem: ListRenderItem<IWeatherData> = ({ item }) => {
    return <WeatherItem data={item} />;
  };
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Header title={t('weatherApp')} isBackButton={false} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item, index) => item?.city.toString() + index}
          renderItem={renderItem}
        />
      </View>
    </SafeScreen>
  );
};

export default Home;
