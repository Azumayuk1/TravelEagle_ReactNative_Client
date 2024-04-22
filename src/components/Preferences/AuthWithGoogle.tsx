import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconUserBig from '../icons/IconUserBig.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {colors} from '../../globalStyles/globalColors.tsx';

interface Props {}

const AuthWithGoogle: FC<Props> = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconUserBig />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Войдите с Google</Text>
        <Text style={styles.textSubtitle}>
          Получайте персональные предложения
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: colors.secondaryContainer,
    borderWidth: 1,
    backgroundColor: colors.lightSurface,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textTitle: {
    ...GlobalTextStyles.titleSmall,
    color: colors.generalFontColor,
  },
  textSubtitle: {
    ...GlobalTextStyles.bodySmall,
    color: colors.primary,
  },
});

export default React.memo(AuthWithGoogle);
