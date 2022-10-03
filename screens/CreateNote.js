import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


export default function App() {
  return (
 
    <View>
        <Text>createNote</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
