import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React, { Component } from "react";
import uuid from "react-native-uuid";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function MainPageContainer() {
  const [textInput, setTextInput] = useState("");
  const [notes, setNotes] = useState([]);

  const onAddHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        _id: uuid.v4(),
        textInput,
      },
    ]);

    setTextInput("");
  };


  const onDeleteHandler = (Id) => {
    setNotes((prev) => prev.filter((item) => item._id !== Id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.textInput}</Text>
      <View style={styles.iconContainer}>
        <Image style={styles.iconimg} source={require("../Assets/eye.png")} />
        <TouchableOpacity onPress={() => onDeleteHandler(item._id)}>
          <Image
            style={styles.iconimg}
            source={require("../Assets/trash-bin.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  // <ImageBackground source={{uri: "https://i.pinimg.com/originals/b1/97/5a/b1975ac8a44e19cf0edb1c13cc1a9507.jpg"}} style={styles.bgImage} />
  return (
    <ImageBackground blurRadius={1} source={{uri: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tutu Todo List</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.mainText}>
            What's on your bucket list for today?
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Write Something.."
            onChangeText={setTextInput}
            value={textInput}
          />

          <View style={styles.addBtnContainer}>
            <Button title="Add" color="#33B4C6" onPress={onAddHandler} />
          </View>
        </View>
        <ScrollView>
          <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFFDFF",
  },
  subContainer: {
    marginVertical: 100,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
  },
  mainText: {
    fontSize: 16,
  },
  formContainer: {
    marginTop: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    marginTop: 12,
    borderWidth: 0.2,
    padding: 12,
  },
  addbutton: {
    width: 20,
    height: 20,
  },
  addbutton: {
    width: 100,
    height: 100,
  },
  listItem: {
    padding: 25,
    backgroundColor: "rgba(255,255,255,0.9)",
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  listItemText: {
    fontSize: 15,
  },
  addBtn: {
    marginVertical: 20,
    backgroundColor: "#E4E6E6",
  },
  addBtnContainer: {
    marginVertical: 10,
  },
  iconimg: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  bgImage:{
    flex: 1,
    resizeMode: "cover",
    // justifyContent: 'center',
  }
});
