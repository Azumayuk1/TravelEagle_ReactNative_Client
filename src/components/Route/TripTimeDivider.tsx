import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import ListDivider from '../Preferences/ListDivider.tsx';
import IconRoute from '../icons/IconRoute.tsx';

interface Props {
  travelTime?: string;
}

const TripTimeDivider: FC<Props> = ({travelTime}) => {
  if (travelTime) {
    return (
      <>
        <ListDivider />
        <View style={styles.container}>
          <IconRoute />
          <Text style={styles.text}>{'Время в пути ~ ' + travelTime}</Text>
        </View>
      </>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    height: 32,
    backgroundColor: colors.lightSurface,
    justifyContent: 'flex-start',
    borderColor: colors.secondaryContainer,
    borderWidth: 1,
    paddingVertical: 4,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  text: {
    ...GlobalTextStyles.labelMedium,
    color: colors.secondary,
    marginLeft: 6,
  },
});

export default React.memo(TripTimeDivider);
