import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, TextInput } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text,Button,Divider,List,ListItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-community/async-storage';
import {  KeyboardAvoidingView, Platform } from 'react-native-web';
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

    const renderItem = ({ item, index }) => (
        <ListItem
          title={<Text category="h5">{item}</Text>}
          onPress ={()=>navigation.navigate("Note",{
              singleNote:item
          })}
          
        />
      );

  
  return (
 
    <View style={{backgroundColor: "#222B45",flex:1}}>
      <List
      style={styles.container}
      data={notes.reverse()}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item:{
      marginVertical:4
  },
  title:{
      textAlign: "center",
      marginTop: 50
  },
  notes:{
      fontSize:24
  
  }
});
