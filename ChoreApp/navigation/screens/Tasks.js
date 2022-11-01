import React, {useState, useEffect} from 'react';
import { Keyboard,Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Tasks({navigation}) {

  const [task, setTask] = useState()
  const [taskItems , setTaskItems] = useState([]); //The initial value of taskItem state is an empty array

  useEffect(() => {
    if(task !== undefined){
      handleAddTask();
    }
  }, [task])
  //onPress() of the button calls handleAddTask()
  //task is a state. It is the string in textinput during the button press.
  //taskItem is a state. It is the array of tasks.
  const handleAddTask = () => {
    Keyboard.dismiss(); //close the keyboard
  
    setTaskItems([...taskItems, task]); //update taskItems array, previous taskItems array + task -when inserted
  }

  //onPress() of the Task component
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; //get all items in taskItems
    itemsCopy.splice(index, 1); //removes the item at index from the array
    setTaskItems(itemsCopy);
  }

  const goToTaskAdd = () => {
    navigation.navigate('TaskAdd', {setTask: setTask }); //, updateTaskList: handleAddTask
  }

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>
        {console.log("In task, ")}
        {console.log(task)}
        {console.log("In taskList, ")}
        {console.log(taskItems)}

        <View style={styles.items}>
        {/** This is where the tasks will go! */}
        {
          
          taskItems.map((item, index) => { //map takes a call back faction- if 2 parameter it returns value and index.
            /*When you are outputting an array of react component, each component needs a key that unique identify them- we use index- so react can track them overtime
            https://kentcdodds.com/blog/understanding-reacts-key-prop
            */
           //if the array is empty, then the map won't run??? If there is atleast 1 task, then create the task.
          
            return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task title={item.taskName} reward={item.reward} note={item.note}/>
              </TouchableOpacity>
            ) 
          })
          
        }
        
        </View>
      </View>

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
    

    return (
        <View style={styles.item}>
            <View style  = {styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style = {styles.itemText}>{"Title:" + props.title}</Text>
                <Text style = {styles.itemText}>{"Reward:" + props.reward}</Text>
                <Text style = {styles.itemText}>{"Note" + props.note}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const organzier = StyleSheet.create({
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
        maxWidth: '80%', //ensure the text for task won't push circle outside the screen

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});
