import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function MainPageContainer() {
    const [textInput, setTextInput] = useState('')
    const [imgUrl, setImageUrl]=useState('')


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tutu Todo List</Text>
      </View>
      <View style={styles.formContainer}>
          <Text style={styles.mainText}>What's on your bucket list for today?</Text>
          <TextInput style={styles.textInput} placeholder="Write Something.."  onChangeText={setTextInput} value={textInput} />
          <TextInput style={styles.textInput} placeholder="imageUrl" onChangeText={setImageUrl} value={imgUrl} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});
