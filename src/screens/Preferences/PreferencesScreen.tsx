import {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import AuthWithGoogle from '../../components/Preferences/AuthWithGoogle.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import TransportationSelector from '../../components/Preferences/TransportationSelector.tsx';
import ChipWithIcon from '../../components/generic/ChipWithIcon.tsx';
import IconPlus from '../../components/icons/IconPlus.tsx';
import ListRemovablePlaceTypes from '../../components/Preferences/ListRemovablePlaceTypes.tsx';
import {entertainment, PlaceType} from '../../api/types.ts';
import ModalAddPlacesToCategory from '../../components/Preferences/ModalAddPlacesToCategory.tsx';

const PreferencesScreen: FC = () => {
  const [transportationModeByCarSelected, setTransportationModeByCarSelected] =
    useState(true);

  const switchOptions = [
    {label: 'Машина', value: 1},
    {label: 'Транспорт', value: 2},
  ];

  // Stores all available place types. If one place type is added to ignored/preferred list,
  // it gets removed from this one.
  const [allAvailablePlaceTypes, setAllAvailablePlaceTypes] =
    useState(entertainment);

  const [ignoredPlaces, setIgnoredPlaces] = useState<PlaceType[]>([]);
  const [modalVisibleIgnoredPlaces, setModalVisibleIgnoredPlaces] =
    useState(false);

  const [preferredPlaces, setPreferredPlaces] = useState<PlaceType[]>([]);
  const [modalVisiblePreferredPlaces, setModalVisiblePreferredPlaces] =
    useState(false);

  const onAddIgnoredPlace = (placeType: PlaceType) => {
    const newAvailablePlacesList = allAvailablePlaceTypes.slice(0);
    setAllAvailablePlaceTypes(
      newAvailablePlacesList.filter(value => value.id !== placeType.id),
    );

    const newIgnoredPlaces = ignoredPlaces.slice(0);
    newIgnoredPlaces.push(placeType);
    setIgnoredPlaces(newIgnoredPlaces);
  };

  const onRemoveIgnoredPlace = (placeType: PlaceType) => {
    const newAvailablePlacesList = allAvailablePlaceTypes.slice(0);
    newAvailablePlacesList.push(placeType);
    setAllAvailablePlaceTypes(newAvailablePlacesList);

    const newIgnoredPlaces = ignoredPlaces.slice(0);
    setIgnoredPlaces(
      newIgnoredPlaces.filter(value => value.id !== placeType.id),
    );
  };

  const onAddPreferredPlace = (placeType: PlaceType) => {
    const newAvailablePlacesList = allAvailablePlaceTypes.slice(0);
    setAllAvailablePlaceTypes(
      newAvailablePlacesList.filter(value => value.id !== placeType.id),
    );

    const newPreferredPlaces = preferredPlaces.slice(0);
    newPreferredPlaces.push(placeType);
    setPreferredPlaces(newPreferredPlaces);
  };

  const onRemovePreferredPlace = (placeType: PlaceType) => {
    const newAvailablePlacesList = allAvailablePlaceTypes.slice(0);
    newAvailablePlacesList.push(placeType);
    setAllAvailablePlaceTypes(newAvailablePlacesList);

    const newPreferredPlaces = preferredPlaces.slice(0);
    setPreferredPlaces(
      newPreferredPlaces.filter(value => value.id !== placeType.id),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AuthWithGoogle />
      <Text style={styles.sectionTitle}>Как планируете добираться?</Text>
      <View style={styles.transportationTypeSection}>
        <TransportationSelector
          switchOptions={switchOptions}
          transportationModeSelected={transportationModeByCarSelected}
          setTransportationModeSelected={setTransportationModeByCarSelected}
        />
      </View>

      <Text style={styles.sectionTitle}>Что вас не интересует?</Text>
      <View style={styles.dislikesSection}>
        <ChipWithIcon
          text={'Добавить игнорируемые места'}
          onPress={() => setModalVisibleIgnoredPlaces(true)}
          icon={<IconPlus />}
          filled={true}
        />
        <ListRemovablePlaceTypes
          placeTypes={ignoredPlaces}
          onRemovePlacePressed={onRemoveIgnoredPlace}
        />
      </View>

      <Text style={styles.sectionTitle}>Что вам особенно интересно?</Text>
      <View style={styles.likesSection}>
        <ChipWithIcon
          text={'Добавить интересные места'}
          onPress={() => setModalVisiblePreferredPlaces(true)}
          icon={<IconPlus />}
          filled={true}
        />
        <ListRemovablePlaceTypes
          placeTypes={preferredPlaces}
          onRemovePlacePressed={onRemovePreferredPlace}
        />
      </View>

      <ModalAddPlacesToCategory
        isVisible={modalVisibleIgnoredPlaces}
        onCloseRequested={() => setModalVisibleIgnoredPlaces(false)}
        placeTypesList={allAvailablePlaceTypes}
        onAddPlaceType={onAddIgnoredPlace}
        title={'Добавьте неинтересные места'}
      />

      <ModalAddPlacesToCategory
        isVisible={modalVisiblePreferredPlaces}
        onCloseRequested={() => setModalVisiblePreferredPlaces(false)}
        placeTypesList={allAvailablePlaceTypes}
        onAddPlaceType={onAddPreferredPlace}
        title={'Добавьте наиболее интересные места'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
    flex: 1,
    padding: 16,
    flexDirection: 'column',
  },
  sectionTitle: {
    paddingVertical: 12,
    ...GlobalTextStyles.titleMedium,
    color: colors.generalFontColor,
  },
  transportationTypeSection: {},
  dislikesSection: {},
  likesSection: {},
});

export default PreferencesScreen;
