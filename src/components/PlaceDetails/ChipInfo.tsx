import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  text: string;
  style?: any;
}

const ChipInfo: FC<Props> = ({text, style}) => {
  return (
    <View style={[styles.container, styles.filledContainer, style]}>
      <Text style={styles.filledText}>{text}</Text>
    </View>
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
  filledContainer: {backgroundColor: colors.secondaryContainer},
  filledText: {
    color: colors.generalFontColor,
    ...GlobalTextStyles.labelLarge,
    marginRight: 4,
    textAlignVertical: 'center',
  },
});

export default React.memo(ChipInfo);
