import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import Modal from 'react-native-modal/dist/modal';
import IconClose from '../icons/IconClose.tsx';
import {PlaceType} from '../../api/types.ts';
import ChipWithIcon from '../generic/ChipWithIcon.tsx';
import IconPlus from '../icons/IconPlus.tsx';
import ListDivider from './ListDivider.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';

interface Props {
  isVisible: boolean;
  onCloseRequested: () => void;
  placeTypesList: PlaceType[];
  onAddPlaceType: (newPlace: PlaceType) => void;
  title: string;
}

const keyExtractor = (item: PlaceType) => item.id;

const ModalAddPlacesToCategory: FC<Props> = ({
  isVisible,
  onCloseRequested,
  placeTypesList,
  onAddPlaceType,
  title,
}) => {
  const renderItem = ({item}: {item: PlaceType}) => {
    return (
      <ChipWithIcon
        icon={<IconPlus />}
        text={item.translationRu}
        onPress={() => onAddPlaceType(item)}
      />
    );
  };

  useEffect(() => {
    console.log('Place types list changed, new list:', placeTypesList);
  }, [placeTypesList]);

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.1}
      coverScreen={true}
      style={styles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <TouchableOpacity onPress={onCloseRequested} style={styles.closeButton}>
        <IconClose />
      </TouchableOpacity>

      <Text style={styles.titleText} numberOfLines={1}>
        {title}
      </Text>

      <FlatList
        data={placeTypesList}
        renderItem={renderItem}
        ItemSeparatorComponent={ListDivider}
        contentContainerStyle={styles.list}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <Text style={styles.emptyListText} numberOfLines={1}>
            Все места выбраны
          </Text>
        }
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flexDirection: 'column',
    borderRadius: 12,
    backgroundColor: colors.lightSurface,
    width: '90%',
    flex: 0,
    alignSelf: 'center',
    height: '90%',
  },
  closeButton: {
    margin: 8,
    marginBottom: 0,
  },
  list: {
    height: '100%',
    padding: 12,
    alignItems: 'center',
  },
  titleText: {
    ...GlobalTextStyles.titleMedium,
    textAlign: 'center',
    marginVertical: 8,
  },
  emptyListText: {
    ...GlobalTextStyles.titleSmall,
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default ModalAddPlacesToCategory;
