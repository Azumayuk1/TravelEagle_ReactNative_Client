import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  text: string;
  onPress: () => void;
  filled?: boolean;
  style?: any;
  icon?: ReactNode;
}

const ChipWithIcon: FC<Props> = ({
  text,
  style,
  onPress,
  filled = false,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        filled ? styles.filledContainer : styles.outlinedContainer,
        style,
      ]}
      onPress={onPress}>
      <Text style={filled ? styles.filledText : styles.outlinedText}>
        {text}
      </Text>
      <View style={styles.icon}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignContent: 'center',
    alignSelf: 'flex-start',
  },
  outlinedContainer: {
    borderWidth: 1,
    borderColor: colors.onSurfaceVariant,
    alignItems: 'center',
  },
  outlinedText: {
    color: colors.onSurfaceVariant,
    ...GlobalTextStyles.labelLarge,
    marginRight: 4,
    textAlignVertical: 'center',
  },
  filledContainer: {
    backgroundColor: colors.secondaryContainer,
    alignItems: 'center',
  },
  filledText: {
    color: colors.generalFontColor,
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

export default React.memo(ChipWithIcon);
