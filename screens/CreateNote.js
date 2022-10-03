import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-community/async-storage';


export default function createNote() {
    const [note,setNote] = useState("")
    const navigation = useNavigation()

    const saveNote = async () => {
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.AsyncStorage.setIem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("AllNotes"))
    }
  return (
 
    <View>
        <Text>create Note</Text>
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
