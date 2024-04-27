import React, {FC, useCallback, useRef, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import IconSearch from '../icons/IconSearch.tsx';
import IconClose from '../icons/IconClose.tsx';
import {GlobalTextStyles} from '../../globalStyles/globalTextStyles.ts';
import {colors} from '../../globalStyles/globalColors.tsx';

interface IProps {
  value: string;
  onChangeText: (value: string) => void;
  containerStyle?: any;
  placeholderText: string;
  onSubmit?: () => void;
}

const GenericSearchBar: FC<IProps> = props => {
  const {onChangeText, placeholderText, onSubmit} = props;
  const ref = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value);

  const clear = useCallback(() => {
    setValue('');
    onChangeText && onChangeText('');
  }, [onChangeText]);

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View
        style={[
          styles.inputTextView,
          isFocused ? styles.inputTextBorder : undefined,
        ]}>
        <IconSearch />
        <TextInput
          ref={ref}
          style={styles.inputText}
          textAlign={'left'}
          placeholder={placeholderText}
          placeholderTextColor={colors.onSurfaceVariant}
          value={value}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={newValue => {
            console.log('newValue', newValue);
            setValue(newValue);
            onChangeText && onChangeText(newValue);
          }}
          onSubmitEditing={onSubmit}
        />
        {value && (
          <TouchableOpacity onPress={clear}>
            <IconClose />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  inputTextView: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 24,
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    backgroundColor: colors.lightSurface,
    marginHorizontal: 0,
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    marginHorizontal: 10,
    ...GlobalTextStyles.bodyLarge,
  },
  inputTextBorder: {
    borderWidth: 1,
    borderColor: colors.screenBackground,
  },
});

export default React.memo(GenericSearchBar);
