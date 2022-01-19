import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Button, FlatList, ScrollView } from 'react-native';


export default function MainPageContainer() {
    const [textInput, setTextInput] = useState('')
    const [imgUrl, setImageUrl]=useState('')

    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];

    const renderItem = ({item})=>(
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.title}</Text>
        <View style={styles.iconContainer}>
        <Image style={styles.iconimg} source={require('../Assets/eye.png')}  />
        <Image style={styles.iconimg} source={require('../Assets/trash-bin.png')}  />
        </View>
      </View>
    )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tutu Todo List</Text>
      </View>
      <View style={styles.formContainer}>
          <Text style={styles.mainText}>What's on your bucket list for today?</Text>
          <TextInput style={styles.textInput} placeholder="Write Something.."  onChangeText={setTextInput} value={textInput} />
          <TextInput style={styles.textInput} placeholder="imageUrl" onChangeText={setImageUrl} value={imgUrl} />
          <View style={styles.addBtnContainer}>
            <Button title="Add" color="#33B4C6" />
          </View>
      </View>
      <ScrollView>
        <FlatList data={DATA} renderItem={renderItem}  keyExtractor={item => item.id} />
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFDFF',
},
subContainer:{
  marginVertical: 100,
    marginHorizontal: 30
},
title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleContainer:{
    alignItems: 'center',
  },
  mainText:{
      fontSize: 16,
  },
  formContainer:{
      marginTop: 40
  },
  textInput:{
    height: 40,
    marginTop: 12,
    borderWidth: 0.2,
    padding: 12,
  },
  addbutton:{
    width:20,
    height:20,
  },
  addbutton:{
    width: 100,
    height: 100
  },
  listItem:{
    padding: 15,
    backgroundColor: '#A3F4FF',
    marginVertical:7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer:{
    flexDirection: 'row',
  },
  listItemText:{
    fontSize: 15,
  },
  addBtn:{
    marginVertical:20,
    backgroundColor: '#E4E6E6'
  },
  addBtnContainer:{
    marginVertical: 10
  },
  iconimg:{
    width: 20,
    height: 20,
    marginHorizontal: 5,
  }
});
