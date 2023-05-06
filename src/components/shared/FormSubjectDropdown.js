import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';

const FormSubjectDropdown = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  options = [],
  coresubject = '',
  ...more
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  {["","Data Science","","",""]}

  const getSubjectOptions = () => {
    if (coresubject === 'Programming') {
      return ['C-Sharp','Java','C++','Python','Ruby','Dart'];
    } else if (coresubject === 'Computational Theroy') {
      return ['Introduction to Com Scy','Computer Architecture'];
    } else if (coresubject === 'Networking') {
      return ['Networking Essentials','Network Administration','Network Security'];}
      else if (coresubject === 'Computer Security') {
        return ['Cryptography','Computer Secutiry Fundementals', 'Information Security Management','Ethical Hacking'];}
      else {
      return [];
    }
  };

  const subjectoptions = getSubjectOptions();

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
            {subjectoptions.map((option, index) => (
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

export default FormSubjectDropdown;