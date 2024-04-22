import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  switchOptions: any;
  transportationModeSelected: boolean;
  setTransportationModeSelected: (value: boolean) => void;
}

const TransportationSelector: FC<Props> = ({
  switchOptions,
  transportationModeSelected,
  setTransportationModeSelected,
}) => {
  return (
    <View style={styles.viewModeContainer}>
      <SwitchSelector
        initial={0}
        value={transportationModeSelected ? 0 : 1}
        onPress={value => {
          if (value === 1) {
            setTransportationModeSelected(true);
          } else {
            setTransportationModeSelected(false);
          }
        }}
        selectedColor={colors.secondaryContainer}
        buttonColor={colors.primary}
        borderColor={colors.secondaryContainer}
        hasPadding
        options={switchOptions}
        borderRadius={24}
        textStyle={styles.switchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewModeContainer: {
    marginTop: 12,
  },
  switchText: {
    ...GlobalTextStyles.labelMedium,
  },
});

export default React.memo(TransportationSelector);
