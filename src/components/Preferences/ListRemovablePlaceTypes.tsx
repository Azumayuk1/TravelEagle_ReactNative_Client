import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {PlaceType} from '../../api/types.ts';
import ChipWithIcon from '../generic/ChipWithIcon.tsx';
import IconClose from '../icons/IconClose.tsx';
import ListDivider from './ListDivider.tsx';

interface Props {
  placeTypes: PlaceType[];
  onRemovePlacePressed: (placeType: PlaceType) => void;
}

const keyExtractor = (item: PlaceType) => item.id;

const ListRemovablePlaceTypes: FC<Props> = ({
  placeTypes,
  onRemovePlacePressed,
}) => {
  const renderItem = ({item}: {item: PlaceType}) => {
    return (
      <ChipWithIcon
        text={item.title}
        onPress={() => onRemovePlacePressed(item)}
        icon={<IconClose />}
        style={styles.chip}
      />
    );
  };

  return (
    <FlatList
      data={placeTypes}
      renderItem={renderItem}
      numColumns={2}
      ItemSeparatorComponent={ListDivider}
      ListHeaderComponent={ListDivider}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 4,
  },
});

export default React.memo(ListRemovablePlaceTypes);
