import React from 'react';
import {create} from 'react-test-renderer'
import Tasks from '../navigation/screens/Tasks';
import TaskAdd from '../navigation/screens/taskAdd';


//Fails because Task must be ran after firebase.ts which initialize the app.
const tree = create(<Tasks />)
test('render taskAdd', () => { 
   expect (tree).toMatchSnapshot();
 })


 const treex = create(<TaskAdd />)
 test('render taskAdd', () => { 
    expect (treex).toMatchSnapshot();
  })
 
 
