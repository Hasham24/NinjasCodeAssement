type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type Dayjs = import('dayjs').Dayjs;
type RootStackParamList = {
  home: undefined;
};

type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
