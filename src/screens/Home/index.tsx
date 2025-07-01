import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header, SafeScreen } from '~components';
import useHome from './useHome';
import useStyle from './styles';

const Home = () => {
  const styles = useStyle();
  const { t } = useTranslation('home');
  const {} = useHome();
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Header title={t('weatherApp')} isBackButton={false} />
      </View>
    </SafeScreen>
  );
};

export default Home;
