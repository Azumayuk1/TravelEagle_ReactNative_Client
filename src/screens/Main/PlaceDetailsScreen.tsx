import React, {FC, useEffect} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PlaceDetailsScreenNavProps} from '../../navigation/stacks/Main/MainStack.tsx';
import {colors} from '../../globalStyles/globalColors.tsx';
import ChipInfo from '../../components/PlaceDetails/ChipInfo.tsx';
import {getPlaceTypeTranslation} from '../../utility/placeTranslation.ts';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import OutlinedButton from '../../components/generic/OutlinedButton.tsx';
import IconMap from '../../components/icons/IconMap.tsx';
import IconOpenInNew from '../../components/icons/IconOpenInNew.tsx';

const PlaceDetailsScreen: FC<PlaceDetailsScreenNavProps> = ({
  route,
  navigation,
}) => {
  const place = route.params.place;

  // Setting the city name in the header
  useEffect(() => {
    navigation.setOptions({
      headerTitle: place.name,
    });
  }, [navigation, place.name]);

  const onBuildRoutePressed = () => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${place.address}`,
    );
  };

  const onOpenWebsitePressed = () => {
    if (place.website) Linking.openURL(place.website);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Image style={styles.image} source={{uri: place.imageUrl}} />

        <View style={styles.section}>
          <ChipInfo text={getPlaceTypeTranslation(place)} />
        </View>

        <View style={styles.section}>
          <ChipInfo text={'Адрес'} />
          <Text style={styles.largeText}>{place.address}</Text>
          <OutlinedButton
            text={'Проложить маршрут'}
            onPress={onBuildRoutePressed}
            icon={<IconMap />}
          />
        </View>

        {place.website && (
          <View style={styles.section}>
            <ChipInfo text={'Веб-сайт'} />
            <Text style={styles.largeText}>{place.website}</Text>
            <OutlinedButton
              text={'Перейти'}
              onPress={onOpenWebsitePressed}
              icon={<IconOpenInNew />}
            />
          </View>
        )}

        <View style={styles.section}>
          <ChipInfo text={'О месте'} />
          <Text style={styles.smallText}>{place.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  largeText: {
    marginVertical: 12,
    ...GlobalTextStyles.labelMedium,
    color: colors.generalFontColor,
  },
  smallText: {
    marginVertical: 12,
    ...GlobalTextStyles.bodySmall,
    color: colors.generalFontColor,
  },
});

export default PlaceDetailsScreen;
