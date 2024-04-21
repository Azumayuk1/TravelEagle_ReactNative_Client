import React, {FC} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars/src';
import Modal from 'react-native-modal/dist/modal';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../globalStyles/globalColors.tsx';
import {GlobalTextStyles} from '../../../globalStyles/globalTextStyles.ts';
import IconClose from '../../icons/IconClose.tsx';
import GenericButton from '../../generic/GenericButton.tsx';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв.',
    'Февр.',
    'Март',
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.',
  ],
  dayNames: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';

interface Props {
  isVisible: boolean;
  onCloseRequested: () => void;
  markedDates: any;
  onDayPress: (date: DateData) => void;
  onSubmit: () => void;
}

const DateRangeCalendar: FC<Props> = ({
  isVisible,
  onCloseRequested,
  markedDates,
  onDayPress,
  onSubmit,
}) => {
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

      <Text style={styles.titleText}>Выберите даты поездки</Text>

      <Calendar
        markingType={'period'}
        markedDates={markedDates}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2024-03-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2024-12-01'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={onDayPress}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        style={styles.calender}
        theme={{arrowColor: colors.primary}}
      />

      <GenericButton
        text={'Выбрать даты'}
        onPress={onSubmit}
        style={styles.submitButton}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flexDirection: 'column',
    borderRadius: 12,
    backgroundColor: colors.lightSurface,
    width: '95%',
    flex: 0,
    marginTop: '40%',
    alignSelf: 'center',
  },
  closeButton: {
    margin: 8,
    marginBottom: 0,
  },
  calender: {
    borderRadius: 12,
    width: '95%',
    alignSelf: 'center',
  },
  titleText: {
    ...GlobalTextStyles.titleMedium,
    textAlign: 'center',
    marginVertical: 8,
  },
  submitButton: {
    alignSelf: 'flex-end',
    marginVertical: 8,
    marginHorizontal: 8,
  },
});

export default React.memo(DateRangeCalendar);
