import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import LogEvent from './LogEvent';
import Events from './Events';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
      <View>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        <Stack.Navigator>
            <Stack.Screen
                name="LogEvent"
                component={LogEvent}
                options={{title: 'Log Event'}}
            />
            <Stack.Screen name="Events" component={Events} />
        </Stack.Navigator>
        <LogEvent />
      </View>
    )
  };