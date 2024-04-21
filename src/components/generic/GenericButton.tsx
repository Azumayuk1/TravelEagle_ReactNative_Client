import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {colors} from '../../globalStyles/globalColors.tsx';

interface Props {
  text: string;
  onPress: () => void;
  style?: any;
  icon?: ReactNode;
}

const GenericButton: FC<Props> = ({text, onPress, style, icon}) => {
  return (
    <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  text: {
    ...GlobalTextStyles.labelLarge,
    color: colors.screenBackground,
  },
});

export default React.memo(GenericButton);
