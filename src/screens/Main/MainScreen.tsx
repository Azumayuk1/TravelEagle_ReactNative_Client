import {FC, useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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

const MainScreen: FC = () => {
  const [searchText, setSearchText] = useState('');

  // Calender
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [userSelectedDates, setUserSelectedDates] = useState(false);

  const currentDate = new Date();

  const currentDateString = formatDate(currentDate); //`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [markedDates, setMarkedDates] = useState<any>(
    getMarkedDates(currentDateString),
  );

  const onDayPressed = (dateData: DateData) => {
    const date = convertDateDataToDate(dateData);

    if (startDate && endDate) {
      setStartDate('');
      setEndDate('');
    }

    if (!startDate) {
      console.log('Setting start date');
      setStartDate(formatDate(date!!));
    } else {
      console.log('Setting end date');
      setEndDate(formatDate(date!!));
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      setMarkedDates(getMarkedDates(currentDateString, startDate, endDate));
    } else if (startDate) {
      setMarkedDates(getMarkedDates(currentDateString, startDate));
    }
  }, [startDate, endDate]);

  const onDatesSelected = () => {
    //TODO: handle dates
    setCalendarModalVisible(false);
    setUserSelectedDates(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GenericSearchBar
        value={searchText}
        onChangeText={setSearchText}
        placeholderText={'Поиск в TravelEagle'}
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
              getShortDate(convertCalendarDateStringToDate(startDate)) +
              ' - ' +
              getShortDate(convertCalendarDateStringToDate(endDate))
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
      />

      <View style={{height: 16}}></View>

      <CitySuggestionBlock
        citySuggestionsList={mockedCitySuggestions2}
        title={'Недалеко от вас'}
      />

      <Image
        source={{
          uri: 'https://tripplanet.ru/wp-content/uploads/europe/russia/st-petersburg/dostoprimechatelnosti-sankt-peterburga.jpg',
        }}
      />

      <DateRangeCalendar
        isVisible={calendarModalVisible}
        onCloseRequested={() => setCalendarModalVisible(false)}
        markedDates={markedDates}
        onDayPress={onDayPressed}
        onSubmit={onDatesSelected}
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
