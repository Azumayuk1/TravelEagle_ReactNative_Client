import {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../globalStyles/globalColors.tsx';
import AuthWithGoogle from '../../components/Preferences/AuthWithGoogle.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import TransportationSelector from '../../components/Preferences/TransportationSelector.tsx';
import ChipWithIcon from '../../components/generic/ChipWithIcon.tsx';
import IconPlus from '../../components/icons/IconPlus.tsx';
import ListRemovablePlaceTypes from '../../components/Preferences/ListRemovablePlaceTypes.tsx';
import {
  mockedIgnoredPlaces,
  mockedPriorityPlaces,
} from '../../mockedData/Preferences.ts';
import {PlaceType} from '../../api/types.ts';

const PreferencesScreen: FC = () => {
  const [transportationModeByCarSelected, setTransportationModeByCarSelected] =
    useState(true);

  const switchOptions = [
    {label: 'Машина', value: 1},
    {label: 'Транспорт', value: 2},
  ];

  const [ignoredPlaces, setIgnoredPlaces] = useState(mockedIgnoredPlaces);
  const [preferredPlaces, setPreferredPlaces] = useState(mockedPriorityPlaces);

  const onRemoveIgnoredPlace = (placeType: PlaceType) => {
    const newIgnoredPlaces = ignoredPlaces.slice(0);
    setIgnoredPlaces(
      newIgnoredPlaces.filter(value => value.id !== placeType.id),
    );
  };

  const onRemovePreferredPlace = (placeType: PlaceType) => {
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
          onPress={() => {}}
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
          onPress={() => {}}
          icon={<IconPlus />}
          filled={true}
        />
        <ListRemovablePlaceTypes
          placeTypes={preferredPlaces}
          onRemovePlacePressed={onRemovePreferredPlace}
        />
      </View>
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
