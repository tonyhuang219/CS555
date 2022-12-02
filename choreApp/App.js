import * as React from 'react';
import UserStack from './navigation/AppNav';
import {AuthProvider} from './navigation/AuthContext'

function App() {
  return (
    <AuthProvider>
    <UserStack/>
    </AuthProvider>
  );
}

export default App;