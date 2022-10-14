import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems , setTaskItems] = useState([]); //The initial value of taskItem state is an empty array

  //onPress() of the button calls handleAddTask()
  //task is a state. It is the string in textinput during the button press.
  //taskItem is a state. It is the array of tasks.
  const handleAddTask = () => {
    Keyboard.dismiss(); //close the keyboard
    setTaskItems([...taskItems, task]); //update taskItems array, previous taskItems array + task -when inserted
    setTask(null); //Because value = {task} inside  TextInput, this clears the textinput.
  }

  //onPress() of the Task component
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; //get all items in taskItems
    itemsCopy.splice(index, 1); //removes the item at index from the array
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text> 

        <View style={styles.items}>
        {/** This is where the tasks will go! */}
        {
          taskItems.map((item, index) => { //map takes a call back faction- if 2 parameter it returns value and index.
            /*When you are outputting an array of react component, each component needs a key that unique identify them- we use index- so react can track them overtime
            https://kentcdodds.com/blog/understanding-reacts-key-prop
            */
              
            return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}/> 
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>
      
        {/* when keyboard opens-when TextInput is pressed-, it covers view. Keyboard avoiding view do not get covered, it moves with keyboard and kbview covers other views. We want the input box to move with keyboard  */}
        {/*react native documentation - behavior*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={styles.writeTaskWrapper}
          >
            {/*onChangeText- callback when textinput's change. You type google. it calls at g, go, goo, goog, googl. the final state is "google" when you stop typing and press button- which gets the state at the correct time- "google". Changed text is passed as a string argument to the callback handler */}
            {/** value={task}. When you type something in the textInput, it will be there even without value={task}. By itself, this doesn't do anything; however this is used to clear the box after pressing the button using handleAddTask() */}
            {/** placeholder- initially "write a task". When you type, the write a task disappears */}
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} /> 

            {/** touchableopacity- button. Below is the styling for the button. */}
            <TouchableOpacity onPress={ () => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper: { //The textbox-TextInput- and the button-TouchableOpacity 
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{ //The TextInput- rounded rectangle
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: { //button- circle shape and white
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center', //The + is in the middle circle
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {}
});
