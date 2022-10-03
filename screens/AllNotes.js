import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text,Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions, KeyboardAvoidingView, Platform, TextInput } from 'react-native-web';
import { getIgnorePatterns } from 'react-native/Libraries/LogBox/Data/LogBoxData';


export default function createNote() {
    const [notes,setNotes] = useState([])
    const navigation = useNavigation()


    useFocusEffect(
        React.useCallback(()=>{
            getNotes()
        },[])
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes)=>{
            setNotes(JSON.parse(notes))
        })
    }

  
  return (
 
    <View>
        <TextInput
        value={note}
        onChangeText={setNote}
        style={{color: "#fff",fontSize:22}}
        multiline={true}
        autofocus
        selectionColor="#fff"/>
        <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style={StyleSheet.bottom}>
            <Button style={StyleSheet.button} appearance="filled"
            onPress={saveNote}
            >
                Create Note
            </Button>
        </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222B45",
    backgroundColor: '#fff',
    color:"white",
    padding:30,
    paddingTop:80,
    alignItems: 'center',
    justifyContent: 'center',
    width:Dimensions.get("window").width
  },
  bottom: {
      flex:1,
      justifyContent:"flex-end",
      marginBottom:36
  },
  button: {
      marginBottom: 30
  }
});
