import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableScreen from './ScrollableScreen';
import { Button, TextInput, Divider, AppBar } from "@react-native-material/core";
import Index from './Index';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#10A19D',
    secondary: '#540375',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    width: '100%'
  },
});
