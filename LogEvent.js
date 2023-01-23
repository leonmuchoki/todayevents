import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

const LogEvent = ({navigation}) => {
    const [textTitle, setTextTitle] = React.useState("");
    const [textDescription, setTextDescr] = React.useState("");
    const [images, setImages] = React.useState([]);

  return (
    <View style={styles.container}>
        <TextInput
            label="Add title"
            value={textTitle}
            onChangeText={text => setTextTitle(text)}
        />
        <TextInput
            label="Add description"
            value={textDescription}
            multiline={true}
            onChangeText={text => setTextDescr(text)}
        />
        <Text variant="displaySmall">Add reminder ?</Text>
        <Button icon="" mode="contained" onPress={() => navigation.navigate('Events', {name: 'Jane'})}>
            Save
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      display: 'flex'
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });

export default LogEvent;