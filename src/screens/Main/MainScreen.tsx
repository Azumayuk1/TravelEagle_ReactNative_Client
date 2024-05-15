import {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import GenericSearchBar from '../../components/generic/GenericSearchBar.tsx';
import {colors} from '../../globalStyles/globalColors.tsx';
import ChipWithIcon from '../../components/generic/ChipWithIcon.tsx';
import IconDate from '../../components/icons/IconDate.tsx';
import DateRangeCalendar from '../../components/Main/DateRangeCalendar/DateRangeCalendar.tsx';
import {DateData} from 'react-native-calendars';
import {
  convertCalendarDateStringToDate,
  convertDateDataToDate,
  formatDate,
  getMarkedDates,
  getShortDate,
} from '../../utility/calendar/dateConversions.ts';
import IconClose from '../../components/icons/IconClose.tsx';
import CitySuggestionBlock from '../../components/Main/destinationSuggestions/CitySuggestionBlock.tsx';
import {
  mockedCitySuggestions,
  mockedCitySuggestions2,
} from '../../mockedData/mockedCitySuggestions.ts';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreens} from '../../navigation/NavigationScreens.ts';
import {CitySuggestion} from '../../dataTypes/citySuggestions.ts';

const MainScreen: FC = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('Санкт-Петербург');

  // Debug
  // useEffect(() => {
  //   console.log('--- Response ---');
  //   console.log('Weather alert:', response.route?.weatherWarning);
  //   response.route?.tripDays.forEach(tripDay => {
  //     console.log('>');
  //     tripDay.destinations.forEach(destination => {
  //       console.log(`Destination: ${destination.place.name}`);
  //     });
  //     console.log('<');
  //   });
  // }, [response]);

  // Calender
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [userSelectedDates, setUserSelectedDates] = useState(false);

  const currentDate = new Date();

  const currentDateString = formatDate(currentDate);

  const [startDate, setStartDate] = useState<Date>();
  const [startDateText, setStartDateText] = useState('');

  const [endDate, setEndDate] = useState<Date>();
  const [endDateText, setEndDateText] = useState('');

  const [markedDates, setMarkedDates] = useState<any>(
    getMarkedDates(currentDateString),
  );

  const onDayPressed = (dateData: DateData) => {
    const date = convertDateDataToDate(dateData);

    // Deleting previous set dates
    if (startDateText && endDateText) {
      setStartDate(undefined);
      setStartDateText('');

      setEndDate(undefined);
      setEndDateText('');
    }

    if (!startDateText) {
      console.log('Setting start date');
      setStartDate(date);
      setStartDateText(formatDate(date!!));
    } else {
      console.log('Setting end date');
      setEndDate(date);
      setEndDateText(formatDate(date!!));
    }
  };

  useEffect(() => {
    if (startDateText && endDateText) {
      setMarkedDates(
        getMarkedDates(currentDateString, startDateText, endDateText),
      );
    } else if (startDateText) {
      setMarkedDates(getMarkedDates(currentDateString, startDateText));
    }
  }, [startDateText, endDateText]);

  const onDatesSelected = () => {
    //TODO: handle dates
    setCalendarModalVisible(false);
    setUserSelectedDates(true);
  };

  // Search and navigation
  const onSubmitSearch = () => {
    // @ts-ignore
    navigation.navigate(MainStackScreens.RouteScreen, {
      destinationName: searchText,
      isSaved: false,
      startDate: startDate,
      endDate: endDate,
    });
  };

  const onCitySuggestionPressed = (citySuggestion: CitySuggestion) => {
    // @ts-ignore
    navigation.navigate(MainStackScreens.RouteScreen, {
      destinationName: citySuggestion.cityName,
      isSaved: false,
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaView}>
        <GenericSearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholderText={'Поиск в TravelEagle'}
          onSubmit={onSubmitSearch}
        />
        <View style={styles.dateChips}>
          <ChipWithIcon
            text={'Даты'}
            onPress={() => setCalendarModalVisible(true)}
            icon={<IconDate />}
          />

          {userSelectedDates && (
            <ChipWithIcon
              text={
                getShortDate(convertCalendarDateStringToDate(startDateText)) +
                ' - ' +
                getShortDate(convertCalendarDateStringToDate(endDateText))
              }
              onPress={() => setUserSelectedDates(false)}
              icon={<IconClose />}
              style={styles.selectedDateChip}
            />
          )}
        </View>

        <Text style={styles.whereToText}>Куда отправимся?</Text>

        <CitySuggestionBlock
          citySuggestionsList={mockedCitySuggestions}
          title={'Может быть...'}
          onCityCardPressed={onCitySuggestionPressed}
        />

        <View style={{height: 16}}></View>

        <CitySuggestionBlock
          citySuggestionsList={mockedCitySuggestions2}
          title={'Недалеко от вас'}
          onCityCardPressed={onCitySuggestionPressed}
        />

        <DateRangeCalendar
          isVisible={calendarModalVisible}
          onCloseRequested={() => setCalendarModalVisible(false)}
          markedDates={markedDates}
          onDayPress={onDayPressed}
          onSubmit={onDatesSelected}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    backgroundColor: colors.screenBackground,
  },
  dateChips: {
    flexDirection: 'row',
    marginTop: 8,
  },
  selectedDateChip: {
    marginLeft: 8,
  },
  whereToText: {
    ...GlobalTextStyles.titleMedium,
    color: colors.generalFontColor,
    marginVertical: 16,
  },
});

export default MainScreen;
