import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize } from '~theme';
import { getWeatherBackgroundColor } from '~utils';

const useStyle = (weatherType: string) => {
  const backgroundColor = getWeatherBackgroundColor(weatherType);
  return StyleSheet.create({
    card: {
      backgroundColor,
      borderRadius: 20,
      padding: 16,
      margin: 16,
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 12,
      elevation: 4,
    },
    city: {
      fontSize: fontSize.large,
      fontFamily: fontFamily.PoppinsBold,
      color: colors.cloudBurst,
      marginBottom: 8,
    },
    temp: {
      fontSize: fontSize.huge,
      fontFamily: fontFamily.PoppinsExtraBold,
      color: colors.purple,
      marginBottom: 8,
    },
    weather: {
      fontSize: fontSize.medium,
      fontFamily: fontFamily.PoppinsSemiBold,
      color: colors.darkGray,
      marginBottom: 8,
    },
    desc: {
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsRegular,
      color: colors.cloudBurst,
      marginBottom: 12,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 8,
    },
    info: {
      fontSize: fontSize.regular,
      fontFamily: fontFamily.PoppinsMedium,
      color: colors.purple,
    },
  });
};

export default useStyle;
