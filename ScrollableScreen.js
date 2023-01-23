import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, DatePickerIOS, Image, Button, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ScrollableScreen = () => {
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleAddImage = async() => {
    // Add code to handle adding images here
    const result = await launchImageLibrary({
      mediaType: 'mixed'
    });
  };

  const handleSubmit = () => {
    // Add code to handle submitting the form here
  };

  return (
    <View>
      <View>
        <Text>Welcome to my scrollable screen!</Text>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          placeholder="Enter text here"
        />
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
        <Button title="Add Image" onPress={handleAddImage} />
        <FlatList
          data={images}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Image source={item.source} style={{ width: 200, height: 200 }} />
          )}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ScrollableScreen;
