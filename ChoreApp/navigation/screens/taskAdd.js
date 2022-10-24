import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker'

export default function TaskAdd() {
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");
  const [note, setNote] = useState("");
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  //Display the data picker
  //set Mode to time/date
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  //onChange() get the date
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    //update the tempDate variable with the date selected.
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    
    //set the text under Date
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  return (
    <>
      <StatusBar />     
      <View style={styles.container}>
        <Text>Task Title</Text>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#A32638"
          label="Task Title"
          onChangeText={setTaskName}
        />
        <Text>Reward</Text>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#A32638"
          label="Reward"
          onChangeText={setReward}
        />
        <Text>Notes</Text>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#A32638"
          label="Notes  "
          onChangeText={setNote}
        />
        <Text>Date</Text>
        <Text>{text}</Text>
        <Button title='DatePicker' onPress={()=> showMode('date')}/>
        <Button title='TimePicker' onPress={()=> showMode('time')}/>
        {/* onPress. it updates showMode which set show=true, mode=time */}
        {
          show && (
            <DateTimePicker
            testID = 'dateTimePicker'
            value = {date}
            mode = {mode}
            is24Hour = {true}
            display = 'default'
            onChange={onChange}
          />)
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
});
