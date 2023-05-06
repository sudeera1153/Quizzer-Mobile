import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';

const FormDegreeDropdown = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  options = [],
  department = '',
  ...more
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  {["","Data Science","","",""]}

  const getDegreeOptions = () => {
    if (department === 'Com Sc and Soft Eng') {
      return ['Computer Science', 'Software Engineering'];
    } else if (department === 'Data Science') {
      return ['Data Science'];
    } else if (department === 'Networking') {
      return ['Computer Networking'];}
      else if (department === 'Computer Security') {
        return ['Computer Security'];}
        else if (department === 'Info. Systems') {
          return ['Management Info Systems'];}
      else {
      return [];
    }
  };

  const degreeOptions = getDegreeOptions();

  const handleOptionSelect = (option) => {
    setIsDropdownOpen(false);
    onChangeText(option);
  };

  return (
    <View style={{ width: '100%', marginBottom: 20 }}>
      <Text>{labelText}</Text>
      <View
        style={{
          position: 'relative',
          width: '100%',
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
          }}
          onPress={handleDropdownToggle}
        >
          <Ionicons
            name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            padding: 10,
            borderColor: COLORS.black + '20',
            borderWidth: 1,
            width: '100%',
            borderRadius: 5,
          }}
          placeholder={placeholderText}
          value={value}
          editable={false}
          {...more}
        />
        {isDropdownOpen && (
          <View
            style={{
              position: 'absolute',
              top: 40,
              width: '100%',
              backgroundColor: COLORS.black,
              elevation: 2,
              borderRadius: 5,
              maxHeight: 150,
              overflow: 'scroll',
            }}
          >
            {degreeOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  padding: 10,
                }}
                onPress={() => handleOptionSelect(option)}
              >
                <Text
                style={{color:COLORS.white}}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default FormDegreeDropdown;