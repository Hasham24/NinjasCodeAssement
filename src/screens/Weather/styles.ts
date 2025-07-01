import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize } from '~theme';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.athensGray,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: fontSize.large,
      fontFamily: fontFamily.PoppinsBold,
      color: colors.cloudBurst,
      marginBottom: 24,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 8,
      padding: 12,
      fontSize: fontSize.standard,
      marginBottom: 16,
      backgroundColor: colors.white,
      fontFamily: fontFamily.PoppinsRegular,
    },
    error: {
      color: colors.pink,
      textAlign: 'center',
      marginVertical: 8,
    },
    weatherBox: {
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: 20,
      marginTop: 24,
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 2,
    },
    city: {
      fontSize: fontSize.regular,
      fontFamily: fontFamily.PoppinsSemiBold,
      color: colors.purple,
      marginBottom: 8,
    },
    temp: {
      fontSize: fontSize.huge,
      fontFamily: fontFamily.PoppinsBold,
      color: colors.lightBlue,
      marginBottom: 8,
    },
    weather: {
      fontSize: fontSize.medium,
      fontFamily: fontFamily.PoppinsMedium,
      color: colors.darkGray,
      marginBottom: 8,
    },
    desc: {
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsRegular,
      color: colors.gray,
      marginBottom: 8,
      textAlign: 'center',
    },
    info: {
      fontSize: fontSize.small,
      fontFamily: fontFamily.PoppinsRegular,
      color: colors.silverChalice,
    },
  });
};

export default useStyle;
