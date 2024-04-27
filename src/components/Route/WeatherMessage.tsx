import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  weatherInfo: string | undefined;
}

const WeatherMessage: FC<Props> = ({weatherInfo}) => {
  if (weatherInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{weatherInfo}</Text>
      </View>
    );
  } else return <></>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: colors.tertiaryContainer,
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 12,
  },
  text: {
    ...GlobalTextStyles.labelLarge,
    color: colors.generalFontColor,
  },
});

export default React.memo(WeatherMessage);
