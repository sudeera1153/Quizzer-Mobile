import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const FormRadioButton = ({
  labelText = '',
  options = [],
  selectedOption = '',
  onSelectOption = null,
}) => {
  return (
    <View style={{ width: '100%', marginBottom: 20 }}>
      <Text>{labelText}</Text>
      {options.map((option, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <RadioButton
            value={option}
            status={selectedOption === option ? 'checked' : 'unchecked'}
            onPress={() => onSelectOption(option)}
          />
          <Text>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default FormRadioButton;
