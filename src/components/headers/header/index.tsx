import React from 'react';
import { isEmpty } from 'lodash';
import {
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { VectorIcon } from '~components';
import { colors, iconSize } from '~theme';
import { ICON_TYPES } from '~constants';
import useStyle from './styles';

interface IHeader {
  title: string;
  iconColor?: string;
  descriptionText?: string;
  isBackButton?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<IHeader> = props => {
  const styles = useStyle();
  const {
    title = '',
    containerStyle,
    iconColor = colors.black,
    textStyle,
    descriptionText = '',
    isBackButton = true,
  } = props;
  const { goBack } = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.container, containerStyle]}>
      {isBackButton && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconButton}
          onPress={goBack}
        >
          <VectorIcon
            iconType={ICON_TYPES.Ionicons}
            name="chevron-back-outline"
            size={iconSize.regular}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.text, textStyle]}>
          {title}
        </Text>
        {!isEmpty(descriptionText) && (
          <Text numberOfLines={2} style={[styles.descriptionText]}>
            {descriptionText}
          </Text>
        )}
      </View>
      {isBackButton && <View style={styles.empty} />}
    </View>
  );
};
export default Header;
