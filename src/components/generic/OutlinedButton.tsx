import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  icon: ReactNode;
  text: string;
  onPress: () => void;
  style?: any;
}

const OutlinedButton: FC<Props> = ({text, onPress, icon, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.outlinedContainer, style]}
      onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.outlinedText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 24,
    alignContent: 'center',
    alignSelf: 'flex-start',
  },
  outlinedContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
  },
  outlinedText: {
    color: colors.primary,
    ...GlobalTextStyles.labelLarge,
    marginRight: 4,
    textAlignVertical: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
});

export default React.memo(OutlinedButton);
