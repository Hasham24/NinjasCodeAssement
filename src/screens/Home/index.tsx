import React from 'react';
import { Text, View } from 'react-native';
import { SafeScreen } from '~components';
import useHome from './useHome';
import useStyle from './styles';

const Home = () => {
  const styles = useStyle();
  const {} = useHome();
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeScreen>
  );
};

export default Home;
