import React, {useState, useEffect} from 'react';
import { Keyboard,Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {getFirestore, onSnapshot, collection}  from 'firebase/firestore';
import { deleteTaskDB, getAllTasks } from "../../backend/firebase";
import { ScrollView } from 'react-native-gesture-handler';

export default function Tasks({navigation}) {

  useEffect(() => {
    async function fetchData(){
      
      //console.log("test") . Rerenders when update with some new data. Like what?
      let taskList = []

      let querySnapshot = await getAllTasks();
      querySnapshot.forEach((doc) => {
        taskList.push({...doc.data(), id: doc.id})
      })
      setTaskItems(taskList);
    }
    fetchData();
  });
  
  const [task, setTask] = useState()
  const [taskItems , setTaskItems] = useState([]); //The initial value of taskItem state is an empty array


  //onPress() of the Task component
  const completeTask = async (index) => {
    let task = taskItems[index];
    let result = await deleteTaskDB(task.id);

  }

  const goToTaskAdd = () => {
    navigation.navigate('TaskAdd', {setTask: setTask }); //, updateTaskList: handleAddTask
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>
        <View style={styles.items}>
        {/** This is where the tasks will go! */}
        {
          
          taskItems.map((item, index) => { //map takes a call back faction- if 2 parameter it returns value and index.
            /*When you are outputting an array of react component, each component needs a key that unique identify them- we use index- so react can track them overtime
            https://kentcdodds.com/blog/understanding-reacts-key-prop
            */
           //if the array is empty, then the map won't run??? If there is atleast 1 task, then create the task.
          
            return(
              <TouchableOpacity key={index} onPress={async () => {completeTask(index);}}>
                <Task title={item.Task_Name} reward={item.Reward} note={item.Note} date={item.Date}/>
              </TouchableOpacity>
            ) 
          })
          
        }
        
        </View>
      </View>
      </ScrollView>
      <Button style = {styles.writeTaskWrapper} title='+' onPress={()=> {goToTaskAdd(); }}/>

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
    bottom: 20,
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


const Task = (props) => {
    
  //update the tempDate variable with the date selected.
  let tempDate = props.date;
  tempDate = tempDate.toDate();
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
  
  //set the text under Date

    return (
        <View style={organizer.item}>
            <View style  = {organizer.itemLeft}>
                <TouchableOpacity style={organizer.square}></TouchableOpacity>
                <View>
                  <Text style = {{ ...organizer.itemText, ...organizer.title}}>{"Title: " + props.title}</Text>
                  <Text style = {{...organizer.itemText, ...organizer.reward}}>{"Reward: " + props.reward}</Text>
                  <Text style = {organizer.itemText}>{"Note " + props.note}</Text>
                  <Text style = {{...organizer.itemText, ...organizer.time}}>{"Time: " + fDate + '\n' + fTime}</Text>
                </View>
            </View>
            <View style={organizer.circular}></View>
        </View>
    )
}

const organizer = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row', //The 2 blocks are itemLeft and circular. Itemleft is composed of text and square 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: { //The text and the square. 
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap' //if task is too long, it will wrap
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15 //space between the button and text
    },
    itemText: {
        maxWidth: '100%', //ensure the text for task won't push circle outside the screen
        
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    title: {
      color: 'blue'

    },
    reward: {
      color: 'orange'
    },
    note: {

    },
    time: {
      color: 'red'
    }
});
